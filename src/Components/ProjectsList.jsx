import express from "../Assets/Images/express.png";
import react from "../Assets/Images/react.png";
import node from "../Assets/Images/node.png";
import sass from "../Assets/Images/sass.png";
import tailwind from "../Assets/Images/tailwind.png";
import jira from "../Assets/Images/jira.png";
import mongodb from "../Assets/Images/mongodb.png";
import html from "../Assets/Images/html.png";
import css from "../Assets/Images/css.png";
import brainflix from "../Assets/Images/brainflix.png";
import portfolio from "../Assets/Images/portfolio.png";
import travelsite from "../Assets/Images/travelsite.png";
import fitpal from "../Assets/Images/fitpal.png";
import instock from "../Assets/Images/instock.png";
import mattzstore from "../Assets/Images/mattzstore.png";
import nextjs from "../Assets/Images/nextjs.svg";
import stripe from "../Assets/Images/stripe.svg";
import js from "../Assets/Images/javascript-1-svgrepo-com.svg";

export const ProjectsList = [
  {
    image: mattzstore,
    name: "MattzStore",
    hubLink: "https://www.mattzstore.com",
    liveLink: "https://www.mattzstore.com",
    description:
      "A robust ecommerce platform that provides a seamless shopping experience for customers. Key features are: product listings, shopping cart, checkout process, ratings and reviews, responsive design, and security.",
    technologies: [
      {
        icon: nextjs,
      },
      {
        icon: stripe,
      },
      {
        icon: js,
      },
      {
        icon: tailwind,
      },
    ],
  },
  {
    image: brainflix,
    name: "BrainFlix",
    hubLink: "https://github.com/ibrahimabdulah/ibrahim-abudalah-brainflix",
    liveLink: "https://brainflixx.netlify.app/",
    description:
      "BrainFlix is a full-stack web application built with React and Exprees during my training at BrainStation. BrainFlix functions as a YouTube clone, features such as dynamic routing, file upload, and commenting.",
    technologies: [
      {
        icon: react,
      },
      {
        icon: node,
      },
      {
        icon: express,
      },
      {
        icon: sass,
      },
    ],
  },
  {
    image: portfolio,
    name: "Personal Portfolio",
    hubLink: "https://github.com/ibrahimabdulah/portfolio-2.0",
    liveLink: "https://www.ibrahimabdulah.com",
    description:
      "My portfolio you are currently looking at! The website was originally inspired by a YouTube video by Sonny Sangha, and at that time I did not know Next JS and TypeScript (the technologies he used) so I decided to build it with React and found it a great opportunity to test my Tailwind CSS skills. Over the time of developing this portfolio it became something I am very proud of.",
    technologies: [
      {
        icon: react,
      },
      {
        icon: tailwind,
      },
    ],
  },
  {
    image: instock,
    name: "InStock",
    hubLink: "https://github.com/ibrahimabdulah/instock-belle",
    liveLink: "https://instock-belle.vercel.app/warehouse",
    description:
      "InStock, a full-stack inventory management system and a collaborative project with 4 developers during my training at BrainStation, provides a content management system for a warehouse. With the use of React and Express we were able to create this project in under a week.",
    technologies: [
      {
        icon: react,
      },
      {
        icon: node,
      },
      {
        icon: express,
      },
      {
        icon: sass,
      },
      {
        icon: jira,
      },
    ],
  },
  {
    image: fitpal,
    name: "YourFitnessPal",
    hubLink: "https://github.com/ibrahimabdulah/capstone-client",
    liveLink: "https://capstone-client-seven.vercel.app/",
    description:
      "A full-stack and a back-end focused React/Exprees web application that allows users to generates a meal plan based on their daily caloric intake. This was my capstone project during my training at BrainStation.",
    technologies: [
      {
        icon: react,
      },
      {
        icon: node,
      },
      {
        icon: express,
      },
      {
        icon: sass,
      },
      { icon: mongodb },
    ],
  },
  {
    image: travelsite,
    name: "TravelSite",
    hubLink: "https://github.com/ibrahimabdulah/Ibrahim-Abudalah-travelsite",
    liveLink: "https://travellssite.netlify.app/",
    description:
      "A static travel site webpage, this was my first project in the full-stack web development bootcamp at BrainStation.",
    technologies: [
      {
        icon: html,
      },
      {
        icon: css,
      },
    ],
  },
];
