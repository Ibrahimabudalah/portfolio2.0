import React from 'react'
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Link } from 'react-router-dom';


function Header() {

const handleClickScroll = () => {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" flex flex-row items-center"
      >
        {/* React social icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/ibrahim-abdulah/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/ibrahimabdulah"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>

      {/* <Link to="#contact"> */}
      <motion.div
        onClick={handleClickScroll}
        initial={{
          x: 500,
          opacity: 0.5,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
      {/* </Link> */}
    </header>
  );
}

export default Header