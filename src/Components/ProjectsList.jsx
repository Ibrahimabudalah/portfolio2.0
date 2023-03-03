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

export const ProjectsList = [
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
  }, //two phones
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
  }, // macbook
  {
    image:
      instock,
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
  }, //ipad
  {
    image:
      fitpal,
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
  }, //imac
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
  }, //
];

// export const Technologies = [
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
//   },
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
//   },
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
//   },
//   {
//     image:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
//   },
