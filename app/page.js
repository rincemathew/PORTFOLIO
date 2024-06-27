import Image from "next/image";
import Header from "./components/Header";
import Me from "./components/Me";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="top" className="light_theme">
      <Header></Header>
      <main>
        <article className="container">
          <Me></Me>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </article>
      </main>
      <a href="#top" className="go-top" data-go-top title="Go to Top">
      <ion-icon name="arrow-up"></ion-icon>
    </a>
    </main>
  );
}
