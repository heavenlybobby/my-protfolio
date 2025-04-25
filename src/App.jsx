import About from "./components/about";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Service } from "./components/service";
import { Testimonials } from "./components/Testimonials";
import { Works } from "./components/Works";

export default function App() {
  return (
    <>
      <Header />
      <Menu />
      <About />
      <Service />
      <Works />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
