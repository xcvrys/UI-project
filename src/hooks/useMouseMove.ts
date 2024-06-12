import { useEffect } from "react";

const useMouseMove = (callback: (x: number, y: number) => void) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      callback(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [callback]);
};

export default useMouseMove;