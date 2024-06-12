import ContactButton from "../components/ContactButton";
import ContactImages from "../components/ContactImages";
import ContactLinks from "../components/ContactLinks";

const Contact = () => {
  return (
    <main className="min-h-[calc(100%-4rem)] h-full w-full sm:px-16 px-8 py-12 pt-20 sm:py-24 flex flex-row gap-20">
      <div className="flex flex-col gap-24 text-lg place-self-center">
        <h1 className="text-6xl font-semibold">Contact US</h1>
        <div className="flex flex-col gap-10">
          <p className="flex flex-col">
            <span>ul. Przy Agorze 520 / 12</span>
            <span>Warszawa, Wrzeciono</span>
          </p>
          <div className="flex flex-col gap-0 items-left md:items-center md:flex-row md:gap-5">
            <ContactButton label="contact@TalentPool.com" />
            <span className="hidden md:block">|</span>
            <ContactButton label="+48676390875" />
          </div>
        </div>
        <ContactLinks />
      </div>
      <ContactImages />
    </main>
  );
};

export default Contact;
