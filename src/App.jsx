import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";

function App() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-mandatory snap-y overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />
      <BrowserRouter>
        <Link to="/">
          <section className="snap-start">
            <Hero />
          </section>
        </Link>

        {/* About */}
        {/* <Link to="/about"> */}
        <section className="snap-center">
          <About />
        </section>
        {/* </Link> */}

        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>

        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
