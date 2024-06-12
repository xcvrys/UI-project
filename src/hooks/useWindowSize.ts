import { useEffect, useState } from 'react';

import useDebounce from './useDebounce';

function useWindowResize(callback: (windowSize: { width: number; height: number }) => void, delay: number) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const debouncedWindowSize = useDebounce(windowSize, delay);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    callback(debouncedWindowSize);
  }, [debouncedWindowSize, callback]);

  return debouncedWindowSize;
}

export default useWindowResize;