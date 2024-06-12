import {
  motion,
  useAnimationFrame,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";

import { ScrollRefState } from "../store/ScrollRefState";
import { useMotionValue } from "framer-motion";
import { useRef } from "react";

type ParallaxProps = {
  children: React.ReactNode;
  baseVelocity?: number;
};

export default function ParallaxText({
  children,
  baseVelocity = 2,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { wrapperRef } = ScrollRefState();
  const { scrollY } = useScroll({
    container: wrapperRef,
  });
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-15, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex overflow-hidden leading-tight tracking-wide whitespace-nowrap flex-nowrap">
      <motion.div
        className="flex text-4xl font-semibold uppercase flex-nowrap"
        style={{ x }}
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <span key={index} className="block mr-8">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
