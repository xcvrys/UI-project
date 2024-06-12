import LinkButton from "./LinkButton";

const HeaderArticle = () => {
  return (
    <section
      className="w-[calc(100%-48px)] flex items-end mb-10 lg:mb-20
      max-[1555px]:mb-10 max-[1555px]:flex-col max-[1555px]:items-center max-[1555px]:gap-10 mx-6"
    >
      <div
        className="w-full h-3/4 bg-black rounded-bl-xl rounded-tl-xl py-3 px-5 text-white relative pr-0
        before:content-[''] before:h-5 before:w-5 before:bg-black before:absolute before:rounded-xl before:-top-2.5 before:-right-2.5
        after:content-[''] after:h-5 after:w-5 after:bg-white after:absolute after:rounded-xl after:-top-5 after:right-0
        max-[1555px]:after:w-0 max-[1555px]:after:h-0 max-[1555px]:before:w-0 max-[1555px]:before:h-0 max-[1555px]:rounded-xl"
      >
        <div className="flex flex-col max-[1555px]:max-w-[calc(100%-20px)] gap-4 text-lg font-light w-fill">
          <h1 className="text-2xl text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            voluptas, quos, quae, quidem quibusdam quia voluptates repudiandae
            nemo quod nesciunt molestias.
          </h1>
          <p className="text-sm text-justify">
            Velit elit eiusmod deserunt veniam quis eiusmod cupidatat
            reprehenderit ea non pariatur qui. Excepteur anim aute consequat
            nisi ea minim deserunt mollit dolore commodo. Mollit enim eiusmod do
            esse pariatur. Pariatur exercitation Lorem aliquip incididunt
            consequat ad sit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nesciunt distinctio magni, nobis laborum temporibus voluptatem
            minus! Iusto qui beatae, doloremque natus nulla, consequatur
            doloribus reiciendis, architecto voluptates veniam vitae
            perferendis?
          </p>
        </div>
      </div>
      <div
        className="h-full bg-black rounded-t-xl rounded-br-xl relative p-3 max-[1555px]:rounded-xl
        "
      >
        <img
          className="object-cover w-full rounded-lg"
          src="https://images.unsplash.com/photo-1548668486-cac652985915?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="random image"
        />
        <LinkButton
          link="https://unsplash.com/photos/graffiti-on-white-concrete-columns-O7rA760Ffz8"
          text="Author"
          styles="absolute bottom-4 right-6"
        />
      </div>
    </section>
  );
};

export default HeaderArticle;
