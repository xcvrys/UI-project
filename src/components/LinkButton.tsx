import { useCursorStore } from "../store/CursorStore";

type LinkButtonProps = {
  link: string;
  text: string;
  styles?: string;
};

const LinkButton = ({ link, text, styles }: LinkButtonProps) => {
  const { setCursorSize, setResetCursor, setCursorText } = useCursorStore();
  return (
    <a
      href={link}
      target="_blank"
      onMouseEnter={() => {
        setCursorSize(150, 150);
        setCursorText("Click");
      }}
      onMouseLeave={() => {
        setResetCursor();
      }}
    >
      <button
        className={`group py-2 px-4 bg-black rounded-xl text-white flex flex-row ${styles}`}
      >
        {text}
        <img
          className="group-hover:-translate-y-2 group-hover:translate-x-2 transition duration-300 ease-in-out w-[16px] h-auto"
          src="/arrow-white.svg"
          alt=""
        />
      </button>
    </a>
  );
};

export default LinkButton;
