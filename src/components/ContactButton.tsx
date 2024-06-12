import { useCursorStore } from "../store/CursorStore";

interface ContactButtonProps {
  label: string;
}

const ContactButton = ({ label }: ContactButtonProps) => {
  const { setCursorSize, setResetCursor } = useCursorStore();
  return (
    <a
      href="#"
      rel="noopener noreferrer"
      className="flex flex-row gap-2 py-2 w-fit group"
      onMouseEnter={() => {
        setCursorSize(150, 150);
      }}
      onMouseLeave={() => {
        setResetCursor();
      }}
    >
      <p>{label}</p>
      <img
        className="group-hover:-translate-y-2 group-hover:translate-x-2 transition duration-300 ease-in-out w-[16px] h-auto"
        src="/arrow.svg"
        alt=""
      />
    </a>
  );
};

export default ContactButton;
