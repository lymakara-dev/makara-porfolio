import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Porfolio from "./components/Porfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
      <Porfolio />
      <Contact />
      <Footer />
    </>
  );
}
