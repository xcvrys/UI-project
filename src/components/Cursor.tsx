import { motion, useMotionValue, useSpring } from "framer-motion";
import useMouseMove from "../hooks/useMouseMove";
import { useCursorStore } from "../store/CursorStore";

const Cursor = () => {
  const {
    cursorSize,
    cursorColor,
    cursorText,
    mixBlendMode,
    image,
    roundings,
    zindex,
    opacity,
  } = useCursorStore();

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useMouseMove((x, y) => {
    cursorX.set(x - 16 - cursorSize.X / 2);
    cursorY.set(y - 13 - cursorSize.Y / 2);
  });

  const springConfig = { damping: 20, stiffness: 300, mass: 0.75 };

  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        opacity: opacity,
        zIndex: zindex,
      }}
      animate={{
        width: cursorSize.X,
        height: cursorSize.Y,
      }}
      className={`sm:hidden xs:hidden lg:grid xl:grid fixed pointer-events-none overflow-hidden place-items-center font-bold text-2xl bg-${cursorColor} ${roundings} ${mixBlendMode}`}
    >
      {image ? (
        <img src={image} alt="cursor" className="w-full h-full" />
      ) : (
        cursorText
      )}
    </motion.div>
  );
};

export default Cursor;
