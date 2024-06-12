import Eye from "./Eye";
import { motion } from "framer-motion";
import { useState } from "react";
import useWindowResize from "../hooks/useWindowSize";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useWindowResize((windowSize) => {
    setWindowWidth(windowSize.width);
  }, 200);

  const isLargeScreen = windowWidth >= 1024;

  const text = "Looking for a pool of talents?".slice(3, 30).split(" ");

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.1 } },
  };

  return (
    <h1 className="mb-20 text-6xl font-bold leading-snug tracking-wide text-center text-black uppercase mt-14 lg:text-9xl lg:leading-snug lg:tracking-widest lg:uppercase lg:font-extrabold lg:text-black lg:mt-32 lg:mb-32 md:mt-24 sm:mt-24 xs:mt-24">
      {isLargeScreen ? (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              variants={variants}
              custom={1}
              className="inline-block"
            >
              {i === 0 ? "L" : <Eye offsetX={-21} offsetY={-14} />}
            </motion.span>
          ))}
          <motion.span initial="hidden" animate="visible" variants={variants}>
            {text.map((letter, i) => (
              <motion.span
                key={i}
                custom={1 + i}
                variants={variants}
                className="inline-block mr-14"
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </>
      ) : (
        <span className="block">Looking for a pool of talents?</span>
      )}
    </h1>
  );
};

export default Header;
