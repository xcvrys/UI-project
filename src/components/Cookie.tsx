import { motion, useAnimation } from "framer-motion";

import { useCursorStore } from "../store/CursorStore";
import { useEffect } from "react";
import useSessionStorage from "../hooks/useSessionStorage";

type CookieProps = {
  triggerShake: boolean;
  setTriggerShake: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCookieAccepted: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cookie = ({
  setIsCookieAccepted,
  triggerShake,
  setTriggerShake,
}: CookieProps) => {
  const { setCursorSize, setResetCursor } = useCursorStore();
  const controls = useAnimation();

  const [isCookieAccepted, setCookieAccepted] = useSessionStorage<boolean>(
    "cookieAccepted",
    false
  );

  useEffect(() => {
    if (triggerShake) {
      controls.start({
        fill: "#f7665f",
        rotate: [0, -1, 1, -1, 1, -1, 1, 0],
        transition: {
          type: "linear",
          stiffness: 100,
          duration: 1,
        },
      });

      setTimeout(() => {
        controls.start({
          fill: "#e7a94e",
          rotate: 0,
        });
        setTriggerShake(false);
      }, 1000);
    }
  }, [triggerShake, controls, setTriggerShake]);

  const handleButtonClick = () => {
    setCookieAccepted(true);
    setIsCookieAccepted(true);
    setResetCursor();
  };

  return isCookieAccepted ? null : (
    <motion.aside
      className="fixed max-w-full transform -translate-x-1/2 left-1/2 z-[40]"
      initial={{ bottom: "-200px" }}
      animate={{ bottom: "40px" }}
      transition={{
        duration: 1,
        type: "spring",
      }}
    >
      <div className="fixed max-w-full bottom-0 left-1/2 transform -translate-x-1/2 w-[572px] h-[184px]">
        <div className="flex flex-col justify-between h-full gap-2 p-5 max-[465px]:py-9 max-[465px]:px-2 max-[465px]:gap-1">
          <p className="text-2xl font-bold">[COOKIES]</p>
          <span className="hidden pr-6 cm:block">
            Hi, unfortunately it's not cookie, any informations on the website
            are generated, the purpose of this website is just a recruitment
            task,<b> ENJOY!</b>
          </span>
          <span className="block pr-6 cm:hidden">
            Hi, unfortunately it's not cookie<b> ENJOY!</b>
          </span>
          <button
            className="hover:font-bold"
            onClick={handleButtonClick}
            onMouseEnter={() => setCursorSize(150, 150)}
            onMouseLeave={() => setResetCursor()}
          >
            [ OK! ]
          </button>
        </div>
      </div>

      <svg
        className="max-w-[98vw] overflow-visible"
        height="184"
        viewBox="0 0 1131 368"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M1054 363C1099.5 363 1126 340.604 1126 314.136V199.144C1118.45 195.973 1111.32 192.165 1104.77 187.72C1081.55 171.962 1070.13 151.229 1070.51 130.577C1045.62 127.952 1021.7 120.134 1002.53 107.123C992.165 100.091 984.04 92.1178 978.148 83.6084C933.511 92.838 883.022 85.4746 847.723 61.5182C824.531 45.7788 811.893 25.5894 809.809 5H77C20.5 5 5 28.4142 5 53.8645V314.136C5 357.231 35 363 77 363H1054Z"
          stroke="black"
          initial={{ fill: "#e7a94e" }}
          animate={controls}
          strokeWidth="6"
        />
      </svg>
    </motion.aside>
  );
};

export default Cookie;
