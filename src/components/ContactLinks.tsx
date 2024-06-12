import { useCursorStore } from "../store/CursorStore";

const ContactLinks = () => {
  const { setCursorSize, setResetCursor } = useCursorStore();

  const handleMouseEnter = () => {
    setCursorSize(150, 150);
  };

  const handleMouseLeave = () => {
    setResetCursor();
  };
  return (
    <div>
      <ul className="relative flex flex-col cursor-pointer gap-7 md:flex-row">
        <li
          className="hover:font-bold"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li
          className="hover:font-bold"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li
          className="hover:font-bold"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
      <p className="text-sm italic text-black/50">/THE_TALENT_POOL</p>
    </div>
  );
};

export default ContactLinks;
