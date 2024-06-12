import { ScrollRefState } from "../store/ScrollRefState";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { wrapperRef } = ScrollRefState();

  useEffect(() => {
    wrapperRef.current?.scrollTo(0, 0);
  }, [pathname, wrapperRef]);

  return null;
}