import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import heroPic from "../Assets/Images/HeroPicture.jpg";
import { Link } from "react-router-dom";

function Hero() {
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
          {/* <Link to="/about"> */}
          <button className="heroBtn">About</button>
          {/* </Link> */}
          {/* <Link href="#experience"> */}
          <button className="heroBtn">Experience</button>
          {/* </Link> */}
          {/* <Link href="#skills"> */}
          <button className="heroBtn">Skills</button>
          {/* </Link> */}
          {/* <Link href="#projects"> */}
          <button className="heroBtn">Projects</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
