import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { useRef } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import { HomeIcon } from "@heroicons/react/24/solid";


function App() {

  const scrollToHome = () => {
    const element = document.getElementById("/");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-mandatory snap-y overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />
      {/* <BrowserRouter> */}
      {/* <Link to="/"> */}
      <section className="snap-start" id="/">
        <Hero />
      </section>
      {/* </Link> */}

      {/* About */}
      {/* <Link to="/about"> */}
      <section className="snap-center" id="about">
        <About />
      </section>
      {/* </Link> */}

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section className="snap-start" id="projects">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      {/* </BrowserRouter> */}
      <footer
        className="sticky bottom-5 w-full cursor-pointer"
        onClick={scrollToHome}
      >
        <div className="flex items-center justify-center">
          <div className="h-10 w-10 bg-darkGreen/80 rounded-full flex items-center justify-center">
            <HomeIcon className="h-7 w-17 pb-0.5 hover:grayscale-100 text-white animate-pulse" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
