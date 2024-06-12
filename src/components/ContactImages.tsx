import { motion } from "framer-motion";
import { useState } from "react";

const ContactImages = () => {
  const [maxImg, setMaxImg] = useState(0);

  return (
    <section className="relative block w-full h-full max-[1318px]:hidden">
      <motion.img
        className="origin-center absolute transform -translate-x-1/2 left-[30%] top-[5%] max-[1572px]:left-[15%] max-[1330px]:left-[0%]"
        src="https://images.unsplash.com/photo-1717501220725-83f151c447e7?q=80&w=450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="random image"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onHoverStart={() => setMaxImg(0)}
        style={{ zIndex: maxImg === 0 ? 10 : 1 }}
      />
      <motion.img
        className="origin-center absolute transform -translate-x-1/2 -translate-y-1/2 top-[60%] left-[35%] max-[1572px]:left-[20%] max-[1330px]:left-[10%]"
        src="https://images.unsplash.com/photo-1717501219905-2711c58ab655?q=80&w=450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="random image"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.25 } }}
        whileHover={{ scale: 1.1 }}
        onHoverStart={() => setMaxImg(1)}
        style={{ zIndex: maxImg === 1 ? 10 : 1 }}
      />
      <motion.img
        className="absolute origin-center transform -translate-x-1/2 top-[40%] left-[65%]"
        src="https://images.unsplash.com/photo-1717250265148-7d96ffc6db0b?q=80&w=275&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="random image"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.5 } }}
        whileHover={{ scale: 1.1 }}
        onHoverStart={() => setMaxImg(2)}
        style={{ zIndex: maxImg === 2 ? 10 : 1 }}
      />
      <motion.img
        className="absolute origin-center transform -translate-x-1/2 top-[1%] left-[60%]"
        src="https://images.unsplash.com/photo-1717250264993-eeb7a71eae9f?w=275&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
        alt="random image"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.75 } }}
        whileHover={{
          scale: 1.1,
        }}
        style={{ zIndex: maxImg === 3 ? 10 : 1 }}
        onHoverStart={() => setMaxImg(3)}
      />
    </section>
  );
};

export default ContactImages;
