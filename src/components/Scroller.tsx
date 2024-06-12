import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import Card from "./Card";
import { ScrollRefState } from "../store/ScrollRefState";
import projects from "../data/cards.json";
import useWindowResize from "../hooks/useWindowSize";

function Scroller() {
  const container = useRef(null);
  const textRef = useRef<SVGTextPathElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const { wrapperRef } = ScrollRefState();
  const [displayText, setDisplayText] = useState(false);
  const [textLength, setTextLength] = useState(0);

  const { scrollYProgress } = useScroll({
    container: wrapperRef,
    target: container,
    offset: ["start start", "end end"],
  });

  const marginScale = useTransform(
    scrollYProgress,
    [0, 1],
    [-window.innerHeight, 0]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const text = textRef.current;
    if (text) {
      text.setAttribute("startOffset", `${-100 + latest * 100}%`);
      if (latest > 0) {
        setDisplayText(true);
      }
    }
  });

  const calculateTextLength = useCallback(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    setTextLength(Math.ceil(length / "SCROLL ".length / 15));
  }, []);

  useWindowResize(calculateTextLength, 200);

  useEffect(() => {
    calculateTextLength();
  }, [calculateTextLength]);

  const svgPath = useMemo(
    () =>
      `M30,10
      h${window.innerWidth - 205}
      a20,20 0 0 1 20,20
      v${window.innerHeight - 285}
      a20,20 0 0 1 -20,20
      h-${window.innerWidth - 205}
      a20,20 0 0 1 -20,-20
      v-${window.innerHeight - 285}
      a20,20 0 0 1 20,-20
      z`,
    []
  );

  return (
    <main ref={container} className="relative mt-32 mb-32 rounded-b-xl">
      <motion.div
        className="h-[90vh] sticky top-0 pointer-events-none hidden end-center md:grid"
        style={{
          marginBottom: marginScale,
        }}
      >
        <svg
          className="w-[calc(100%-6rem)] h-[calc(100%-8rem)] mb-4 overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            ref={pathRef}
            id="progress"
            d={svgPath}
            fill="transparent"
            strokeLinecap="round"
            stroke="transparent"
          />
          <text className="text-2xl font-semibold text-black fill-current">
            <textPath ref={textRef} href="#progress">
              {displayText && "SCROLL ".repeat(textLength)}
            </textPath>
          </text>
        </svg>
      </motion.div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={i}
            i={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            {...project}
          />
        );
      })}
    </main>
  );
}

export default Scroller;
