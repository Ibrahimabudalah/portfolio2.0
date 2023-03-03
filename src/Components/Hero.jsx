import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import heroPic from "../Assets/Images/HeroPicture.jpg";
import { Link } from "react-scroll";

function Hero() {


    const scrollToAbout = () => {
      const element = document.getElementById("about");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    const scrollToSkills = () => {
      const element = document.getElementById("skills");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    const scrollToProjects = () => {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Ibrahim Abdulah",
      "<Problem Solver>",
      "<Critical Thinker>",
      "<Quick Learner>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={heroPic}
        alt="Profile Picture"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
          {"full-stack web developer"}
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          {/* <Link to="about" spy={true} smooth={true} offset={80} duration={500}> */}
            <button className="heroBtn" onClick={scrollToAbout}>
              About
            </button>
          {/* </Link> */}
          {/* <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="heroBtn">Experience</button>
          </Link> */}
          {/* <Link to="skills" spy={true} smooth={true} offset={50} duration={500}> */}
            <button className="heroBtn" onClick={scrollToSkills}>
              Skills
            </button>
          {/* </Link> */}
          {/* <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          > */}
            <button className="heroBtn" onClick={scrollToProjects}>
              Projects
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
