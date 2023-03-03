import React from 'react'
import { motion } from "framer-motion";
import * as icons from "react-icons/si";
import * as fa from "react-icons/fa";

function Skills() {
    const directionLeft = Boolean;
  return (
    <motion.div className="relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] x:px-10 min-h-screen justify-center mx-auto xl:space-y-0 items-center">
      <h3 className="top-24 uppercase absolute tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute tracking-[3px] top-36 text-gray-500 text-sm">
        Some of the technologies I'v been working with recently
      </h3>
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="grid grid-cols-4 gap-5 md:gap-10 lg:gap-14 xl:gap-20 px-5 pt-5 xl:pt-24"
      >
        <fa.FaHtml5 size={70} className="skill" />
        <fa.FaSass size={70} className="skill" />
        <icons.SiJavascript size={70} className="skill" />
        <fa.FaReact size={70} className="skill" />
        <fa.FaNode size={70} className="skill" />
        <icons.SiExpress size={70} className="skill" />
        <icons.SiMysql size={70} className="skill" />
        <fa.FaGitAlt size={70} className="skill" />
        <icons.SiHeroku size={70} className="skill" />
        <icons.SiTailwindcss size={70} className="skill" />
        <icons.SiNextdotjs size={70} className="skill" />
        <icons.SiNetlify size={70} className="skill" />
        <icons.SiReactrouter size={70} className="skill" />
      </motion.div>
    </motion.div>
  );
}

export default Skills