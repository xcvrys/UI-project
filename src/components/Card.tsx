import {
  MotionValue,
  motion,
  useDragControls,
  useScroll,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { ScrollRefState } from "../store/ScrollRefState";
import { useCursorStore } from "../store/CursorStore";

type CardProps = {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  targetScale: number;
  progress: MotionValue<number>;
  range: number[];
  date: string;
  displayImages: string[];
};

function Card({
  i,
  title,
  description,
  color,
  progress,
  range,
  targetScale,
  date,
  displayImages,
}: CardProps) {
  const { wrapperRef } = ScrollRefState();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scale = useTransform(progress, range, [1, targetScale]);
  const { setCursorSize, setResetCursor, setCursorText } = useCursorStore();
  const randomRotation = useMemo(() => Math.floor(Math.random() * 10 - 5), []);
  const dragControls = useDragControls();
  const imageRef = useRef<HTMLImageElement[]>([]);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    container: wrapperRef,
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [displayImages.length]);

  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? displayImages.length - 1 : prevIndex - 1
    );
  }, [displayImages.length]);

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent, info: { offset: { x: number } }) => {
      const dragOffset = info.offset.x;

      if (dragOffset > 100) {
        handlePrevImage();
      } else if (dragOffset < -100) {
        handleNextImage();
      }
    },
    [handleNextImage, handlePrevImage]
  );

  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all(
        displayImages.map((imageUrl, index) => {
          const img = new Image();
          img.src = imageUrl;
          return new Promise<void>((resolve) => {
            img.onload = () => {
              imageRef.current[index] = img;
              resolve();
            };
          });
        })
      );
    };

    preloadImages();
  }, [displayImages]);

  return (
    <div
      ref={container}
      className="h-[90vh] flex items-center justify-center sticky top-0 pointer-events-none"
    >
      <motion.div
        className="flex gap-6 relative flex-col lg:flex-row rounded-2xl px-8 py-6 shadow-xl z-10 pointer-events-auto max-w-[80rem] xl:w-[85%] lg:w-[85%] md:w-[80%] sm:w-[90%] w-[90%] h-[60%] md:flex-col"
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-1vh + ${i * 25}px)`,
          rotate: randomRotation,
        }}
        onHoverStart={() => {
          setCursorSize(150, 150);
          setCursorText("Slide");
        }}
        onHoverEnd={() => setResetCursor()}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragControls={dragControls}
        onDragEnd={handleDragEnd}
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="flex flex-col gap-6">
          <h1 className="flex flex-row justify-between gap-2 text-3xl font-semibold">
            {title}
            <img
              className="md:w-[24px] lg:w-[30px] xl:w-[36px] sm:w-[20px] xs:w-[16px] h-auto"
              src="/arrow.svg"
              alt="arrow"
            />
          </h1>
          <p className="flex flex-col place-content-between">
            <span className="overflow-hidden first-letter:uppercase first-letter:text-xl text-ellipsis sm:text-base md:text-base lg:text-lg xl:text-xl max-[484px]:text-xs">
              {description}
            </span>
            <span className="text-black/50 md:mt-0 lg:mt-8">{date}</span>
          </p>
        </div>
        <div className="rounded-xl overflow-hidden block h-full w-full xl:min-w-[30rem] lg:min-w-[12rem] md:block sm:block max-[484px]:hidden">
          <motion.img
            className="object-cover w-full h-full pointer-events-none"
            src={displayImages[currentImageIndex]}
            alt="Project Image"
            style={{ scale: imageScale }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
