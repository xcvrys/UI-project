import GetArticleData, {
  ArticleElement,
  ContentType,
} from "../utils/GetArticleData";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { motion } from "framer-motion";

const transition = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const ArticleWrapper = () => {
  const { id } = useParams();
  const location = useLocation();
  const [article, setArticle] = useState<ArticleElement>({
    id: 0,
    title: "",
    image: "",
    content: [],
  });

  useEffect(() => {
    const fetchedArticle: ArticleElement = GetArticleData(id) as ArticleElement;
    setArticle(fetchedArticle);
  }, [id, location]);

  if (article && "error" in article) {
    return <div>{article.error}</div>;
  }
  return (
    <main className="w-full min-h-[100vh] flex flex-col md:flex-row">
      {article ? (
        <>
          <div className="top-0 left-0 z-20 w-full h-full overflow-visible md:sticky md:w-1/2">
            <motion.img
              src={article.image}
              className="sticky object-cover rounded-2xl"
              initial={{
                x: location.state?.x || window.innerWidth / 2,
                y: location.state?.y || window.innerHeight / 2,
                width: location.state?.width,
                height: location.state?.height,
              }}
              animate={{
                x: 0,
                y: 0,
                height: "calc(100vh - 2rem)",
                width: "100%",
                transition: {
                  ...transition,
                  delay: 0,
                  duration: 1.4,
                },
              }}
            />
          </div>
          <article className="flex flex-col w-full gap-2 px-8 py-6 md:w-1/2">
            <div className="block overflow-hidden text-3xl font-bold lg:text-5xl ">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{
                  y: 0,
                  transition: { ...transition, delay: 0.75 },
                }}
              >
                {article.title}
              </motion.h1>
            </div>
            {article.content.map((item, index) => {
              switch (item.type) {
                case ContentType.Paragraph:
                  return (
                    <div key={index} className="block overflow-hidden">
                      <motion.p
                        initial={{ y: "100%" }}
                        animate={{
                          y: 0,
                          transition: { ...transition, delay: 0.1 * index + 1 },
                        }}
                      >
                        {item.text}
                      </motion.p>
                    </div>
                  );
                case ContentType.Heading:
                  return (
                    <div className="block overflow-hidden" key={index}>
                      <motion.h2
                        initial={{ y: "100%" }}
                        animate={{
                          y: 0,
                          transition: { ...transition, delay: 0.1 * index + 1 },
                        }}
                        className="mt-4 text-2xl font-bold"
                      >
                        {item.text}
                      </motion.h2>
                    </div>
                  );
                case ContentType.List:
                  return (
                    <ul key={index}>
                      {item.items &&
                        item.items.map((listItem, idx) => (
                          <motion.li key={idx} className="overflow-hidden">
                            <motion.p
                              className="flex flex-row gap-2 ml-3"
                              initial={{ y: "100%" }}
                              animate={{
                                y: 0,
                                transition: {
                                  ...transition,
                                  delay: 0.1 * index + 1,
                                },
                              }}
                            >
                              <span>{idx + 1}.</span>
                              <span>
                                <span className="mr-2 font-bold">
                                  {listItem.text_header}
                                </span>
                                {listItem.text}
                              </span>
                            </motion.p>
                          </motion.li>
                        ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </article>
        </>
      ) : null}
    </main>
  );
};

export default ArticleWrapper;
