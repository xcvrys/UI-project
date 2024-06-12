import { NavLink, useLocation } from "react-router-dom";

import { motion } from "framer-motion";
import { useCursorStore } from "../store/CursorStore";
import { useEffect } from "react";

const tabs = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function AnimatedTabs() {
  const location = useLocation();
  const { setCursorSize, setResetCursor } = useCursorStore();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentTab = tabs.find((tab) => tab.to === currentPath);
    if (!currentTab) {
      if (currentPath.includes("article")) return;
      tabs.push({ to: currentPath, label: "How did you get here?" });
    }

    return () => {
      if (!currentTab) {
        tabs.pop();
      }
    };
  }, [location.pathname]);

  return (
    <nav className="fixed top-8 left-8 bg-black p-1.5 rounded-md flex z-40 space-x-2">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className="relative px-4 py-1 text-white uppercase transition rounded-md"
          onMouseEnter={() => {
            setCursorSize(150, 150);
          }}
          onMouseLeave={() => {
            setResetCursor();
          }}
        >
          {location.pathname === tab.to && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 bg-white rounded-md"
              transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
            />
          )}
          <span
            className={`${
              location.pathname === tab.to ? "text-black" : ""
            } relative z-10`}
          >
            {tab.label}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}
