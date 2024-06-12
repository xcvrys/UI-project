import { Fragment } from "react";
import Paragraph from "../components/Paragraph";
import { motion } from "framer-motion";
import { useCursorStore } from "../store/CursorStore";
import { useNavigate } from "react-router-dom";

type Paragraph = {
  text: string;
  url: string;
  height: number;
  width: number;
};

const paragraphs: Paragraph[] = [
  {
    text: "Elit nostrud id mollit aliquip labore aliquip. Occaecat sit irure veniam ea ipsum deserunt adipisicing ullamco nisi. Consequat tempor ut deserunt cillum ullamco elit magna in ut.",
    url: "https://images.unsplash.com/photo-1716660565802-52f1a05c4f79?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 400,
    width: 400,
  },
  {
    text: "Laborum in sunt aliqua labore voluptate. Adipisicing commodo Lorem nulla veniam elit cillum id reprehenderit magna est ea enim consectetur magna. Do Lorem pariatur incididunt irure tempor minim dolor veniam magna ex ullamco in velit. Occaecat officia ut eiusmod ut esse eu dolore ipsum ea dolore eiusmod excepteur officia non. Ipsum ipsum magna nisi veniam do. Enim ad eu in cillum aute cupidatat eiusmod et.",
    url: "https://plus.unsplash.com/premium_photo-1683141237355-d966b653f414?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 500,
    width: 300,
  },
  {
    text: "Officia mollit aliquip fugiat velit incididunt quis cupidatat sint. Esse ad laboris veniam quis dolor labore occaecat nostrud et duis. Eu tempor laboris et mollit ullamco excepteur dolor voluptate occaecat culpa deserunt nostrud. Veniam voluptate excepteur mollit exercitation consequat ut anim in qui irure quis irure cillum. Sunt sint exercitation dolore laborum eu anim aliquip anim id. Sit ea proident aute et do quis enim. Labore deserunt adipisicing in amet fugiat eiusmod elit. Duis excepteur occaecat minim cillum occaecat commodo sunt consectetur non non enim sunt.",
    url: "https://images.unsplash.com/photo-1717501217963-67e30c290e6f?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 300,
    width: 500,
  },
];

const About = () => {
  paragraphs.forEach((paragraph) => {
    const img = new Image();
    img.src = paragraph.url;
  });
  return (
    <motion.main className="grid justify-center w-full mb-64 mt-60 place-items-center">
      {renderHeader("[ HOW WE STARTED ]", new Date("2018-01-08"))}
      {paragraphs.map((paragraph, i) => (
        <Fragment key={i}>
          {i === 1 && (
            <>
              {RenderImages([
                {
                  url: "https://images.unsplash.com/photo-1512861506260-6520871bbdaa?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  linkTo: "/article/1",
                },
                {
                  url: "https://images.unsplash.com/photo-1547327195-59a16bed035e?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  linkTo: "/article/2",
                },
              ])}
              {renderHeader("*[ NOW ]*", new Date())}
            </>
          )}
          {i === 2 && (
            <>
              {RenderImages([
                {
                  url: "https://images.unsplash.com/photo-1500314144216-35ed69e42b7b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  linkTo: "/article/3",
                },
              ])}
              {renderHeader(
                "[ FUTURE ]",
                new Date(new Date().setFullYear(new Date().getFullYear() + 5))
              )}
            </>
          )}
          <Paragraph key={i} {...paragraph} />
        </Fragment>
      ))}
      {RenderImages([
        {
          url: "https://images.unsplash.com/photo-1531714954364-7af1f61c9a10?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          linkTo: "/article/4",
        },
        {
          url: "https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          linkTo: "/article/5",
        },
      ])}
      <p className="mt-10 italic text-end w-[80%]">
        ...we hop it will be a good one, <br />
        good one without any fear.
      </p>
    </motion.main>
  );
};

type urls = {
  url: string;
  linkTo: string;
};
const RenderImages = (urls: urls[]) => {
  const navigate = useNavigate();

  const { setCursorSize, setCursorText, setResetCursor } = useCursorStore();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, uls: urls) => {
    const rect = (e.target as HTMLImageElement).getBoundingClientRect();
    const x = rect.left - 16;
    const y = rect.top - 13;
    const width = rect.width;
    const height = rect.height;
    navigate(uls.linkTo, {
      state: {
        x,
        y,
        width,
        height,
      },
    });
  };

  return (
    <div
      className={`grid w-[80%] mt-10 gap-4 place-items-center min-h-[500px] ${
        urls.length === 1 ? "grid-cols-1" : "sm:grid-cols-2 grid-cols-1"
      }`}
    >
      {urls.map((url, i) => (
        <a
          key={i}
          className="h-[500px] w-full cursor-pointer"
          onClick={(e) => {
            handleClick(e, url);
            setResetCursor();
          }}
          onMouseEnter={() => {
            setCursorSize(200, 200);
            setCursorText("Read More");
          }}
          onMouseLeave={() => {
            setResetCursor();
          }}
        >
          <img
            className="object-cover w-full h-full pointer-events-none rounded-3xl"
            src={url.url}
            alt="image"
          />
        </a>
      ))}
    </div>
  );
};

const renderHeader = (title: string, date: Date) => (
  <div className="grid m-16 mt-32 text-center place-items-center">
    <h1 className="text-3xl italic font-semibold">{title}</h1>
    <p>{date.toLocaleDateString("en-GB")}</p>
  </div>
);

export default About;
