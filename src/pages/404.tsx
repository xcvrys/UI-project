import Eye from "../components/Eye";
import { motion } from "framer-motion";
import { useCursorStore } from "../store/CursorStore";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const { setCursorSize, setResetCursor, setCursorText } = useCursorStore();
  const navigate = useNavigate();

  return (
    <motion.section
      className="grid h-full cursor-pointer place-items-center"
      onClick={() => navigate("/")}
      onMouseEnter={() => {
        setCursorSize(200, 200);
        setCursorText("Home ↩");
      }}
      onMouseLeave={() => {
        setResetCursor();
      }}
    >
      <div className="flex flex-col gap-6">
        <p className="self-center text-9xl">
          4
          <Eye offsetX={-14} offsetY={-14} />4
        </p>
        <h1 className="self-start">whoopsie daisy,</h1>
        <h2 className="self-end -mt-4">
          emmmm, the page you're looking for doesn't exist
        </h2>
        <p className="self-center text-black/40">
          click anywhere to go back home
        </p>
      </div>
    </motion.section>
  );
};

export default NotFoundPage;
