import Header from "../components/Header";
import HeaderArticle from "../components/HeaderArticle";
import ParallaxText from "../components/ParalaxText";
import Scroller from "../components/Scroller";

const Home = () => {
  return (
    <main className="relative">
      <Header />
      <HeaderArticle />
      <section>
        <ParallaxText>Scroll</ParallaxText>
        <ParallaxText baseVelocity={-2}>Scroll</ParallaxText>
      </section>
      <Scroller />
    </main>
  );
};

export default Home;
