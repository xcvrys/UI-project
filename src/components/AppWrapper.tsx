import { ReactNode, useEffect, useRef, useState } from "react";

import Cookie from "./Cookie";
import Cursor from "./Cursor";
import { ScrollRefState } from "../store/ScrollRefState";

type AppWrapperProps = {
  children: ReactNode;
};

const AppWrapper = ({ children }: AppWrapperProps) => {
  const wrapperRef = useRef<HTMLElement>(null);
  const { setWrapperRef } = ScrollRefState();
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);
  const [triggerShake, setTriggerShake] = useState(false);

  useEffect(() => {
    setWrapperRef(wrapperRef);
  }, [setWrapperRef, wrapperRef]);

  useEffect(() => {
    const hasCookieAccepted = sessionStorage.getItem("cookieAccepted");
    if (hasCookieAccepted) {
      setIsCookieAccepted(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isCookieAccepted && wrapperRef.current) {
        if (wrapperRef.current.scrollTop > 600) {
          wrapperRef.current.scrollTo({
            top: 200,
            left: 0,
            behavior: "smooth",
          });
          setTriggerShake(true);
        }
      }
    };

    const wrapperElement = wrapperRef.current;
    if (wrapperElement) {
      wrapperElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (wrapperElement) {
        wrapperElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isCookieAccepted, wrapperRef, setTriggerShake]);

  return (
    <section
      ref={wrapperRef}
      className="bg-grain h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] rounded-2xl inline-block overflow-auto overflow-x-hidden relative"
    >
      <Cursor />
      {children}
      {!isCookieAccepted && (
        <Cookie
          setIsCookieAccepted={setIsCookieAccepted}
          triggerShake={triggerShake}
          setTriggerShake={setTriggerShake}
        />
      )}
    </section>
  );
};

export default AppWrapper;
