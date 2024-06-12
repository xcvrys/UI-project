import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import { AnimatePresence } from "framer-motion";
import Article from "./pages/Article";
import Footer from "./components/Footer";
import Loading from "./pages/Loading";
import ScrollToTop from "./utils/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFoundPage = lazy(() => import("./pages/404"));

function RouteHandler() {
  return (
    <Suspense fallback={<Loading />}>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {/* <Routes location={location} key={location.pathname}> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="article/:id" element={<Article />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Suspense>
  );
}

export default RouteHandler;
