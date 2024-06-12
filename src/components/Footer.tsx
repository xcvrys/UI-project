import { useCursorStore } from "../store/CursorStore";

const Footer = () => {
  const { setCursorSize, setResetCursor } = useCursorStore();

  const handleMouseEnter = () => setCursorSize(150, 150);
  const handleMouseLeave = () => setResetCursor();

  return (
    <footer className="relative px-8 py-4 mt-5 bg-orange">
      <div className="relative ">
        <div className="absolute w-5 h-5 bg-orange rounded-xl -top-6 -right-10" />
        <div className="absolute w-5 h-5 bg-white rounded-xl -top-9 -right-8" />
        <div className="absolute w-5 h-5 bg-orange rounded-xl -top-6 -left-10" />
        <div className="absolute w-5 h-5 bg-white rounded-xl -top-9 -left-8" />
      </div>
      <div className="flex flex-row justify-between w-full border-b-4 border-b-black p-1.5">
        <h1 className="text-6xl font-bold max-[640px]:text-5xl">
          [TALENT POOL]
        </h1>
        <img className="w-14" src="/arrow.svg" alt="" />
      </div>
      <section className="flex flex-col justify-between w-full my-4 md:flex-row">
        <div className="flex-1 px-6 py-2 border-b-4 border-black md:border-r-4 md:border-b-0">
          <h2 className="mb-3 text-4xl font-bold">GET IN TOUCH</h2>
          <ul
            className="flex flex-col gap-1.5 text-xl cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <li className="hover:font-bold">
              <a href="#" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li className="hover:font-bold">
              <a href="#" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li className="hover:font-bold">
              <a href="#" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="hover:font-bold">
              <a href="#" rel="noopener noreferrer">
                Tinder
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-6 py-2 border-b-4 border-black md:border-r-4 md:border-b-0">
          <h2 className="mb-3 text-4xl font-bold">EXPLORE</h2>
          <ul
            className="flex flex-col gap-1.5 text-xl cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <li className="hover:font-bold">
              <a href="#" rel="noopener noreferrer">
                About
              </a>
            </li>
            <li className="hover:font-bold">
              <a href="#" rel="noopener noreferrer">
                Careers
              </a>
            </li>
            <li className="hover:font-bold">
              <a href="#" rel="noopener noreferrer">
                Work
              </a>
            </li>
            <li className="hover:font-bold">
              <a href="#" rel="noopener noreferrer">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-6 py-2">
          <h2 className="mb-3 text-4xl font-bold">FIND US</h2>
          <div className="flex flex-col">
            <span className="text-sm italic">POLAND</span>
            <p
              className="text-xl mb-4 -mt-0.5 cursor-pointer hover:font-bold"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" rel="noopener noreferrer">
                Warszawa, ul. Przy Agorze
              </a>
            </p>
            <span className="text-sm italic">
              <a href="#" rel="noopener noreferrer">
                POLAND BUT A LITTLE BIT TO THE LEFT
              </a>
            </span>
            <p
              className="text-xl mb-4 -mt-0.5 cursor-pointer hover:font-bold"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" rel="noopener noreferrer">
                Bogatynia, ul. Górników Turowa
              </a>
            </p>
            <span className="text-sm italic">RADOM</span>
            <p
              className="text-xl mb-4 -mt-0.5 cursor-pointer hover:font-bold"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" rel="noopener noreferrer">
                Radom, ul. Stepowa
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="flex items-center flex-row justify-between w-full border-t-4 border-black p-1.5">
        <p className="flex items-center text-sm">
          <img
            className="w-4 h-4 inline-block mr-1.5 fill-current"
            src="/copyright.svg"
            alt=""
          />
          <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {new Date().getFullYear()}
            <a
              href="https://github.com/xcvrys"
              target="_blank"
              rel="noopener noreferrer"
            >
              by xcvrys
            </a>
          </span>
        </p>
        <p className="text-sm">
          <a
            href="#"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Terms of Use
          </a>
          |
          <a
            href="#"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
