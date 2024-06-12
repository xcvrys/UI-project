import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

import { ScrollRefState } from "../store/ScrollRefState";
import { useCursorStore } from "../store/CursorStore";
import { useRef } from "react";

interface ParagraphProps {
  text: string;
  url: string;
  height: number;
  width: number;
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Paragraph = ({ text, url, height, width }: ParagraphProps) => {
  const { wrapperRef } = ScrollRefState();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const {
    setCursorSize,
    setMixBlendMode,
    setCursorImage,
    setRoundings,
    setZindex,
    setOpacity,
    setResetCursor,
  } = useCursorStore();
  const { scrollYProgress } = useScroll({
    container: wrapperRef,
    target: containerRef,
    offset: ["start center", "end 0.75"],
  });

  const words = text.split(" ");

  const handleMouseEnter = () => {
    setCursorSize(width, height);
    setMixBlendMode("normal");
    setCursorImage(url);
    setZindex(10);
    setOpacity(75);
    setRoundings("rounded-none");
  };

  return (
    <div ref={containerRef} className="relative">
      <motion.p
        className={`flex flex-wrap w-fit justify-center max-w-screen-xl p-10 leading-none text-black relative z-20 cursor-none`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={setResetCursor}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </motion.p>
    </div>
  );
};

const Word = ({ children, progress, range }: WordProps) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative mt-3 mr-3 text-[5vw] lg:text-5xl">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={i} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }: CharProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="absolute opacity-10 ">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default Paragraph;
