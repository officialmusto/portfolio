// assets
import cssIcon from "../../assets/icons/css-icon.svg"
import gitIcon from "../../assets/icons/git-icon.svg"
import htmlIcon from "../../assets/icons/html-icon.svg"
import jsIcon from "../../assets/icons/javascript-icon.svg"
import mongoDbIcon from "../../assets/icons/mongodb-icon.svg"
import nodejsIcon from "../../assets/icons/nodejs-icon.svg"
import postgresIcon from "../../assets/icons/postgres-icon.svg"
import reactIcon from "../../assets/icons/react-icon.svg"
import sequelizeIcon from "../../assets/icons/sequelize-icon.svg"
import tsIcon from "../../assets/icons/typescript-icon.svg"
import viteIcon from "../../assets/icons/vite-icon.svg"
import bjThumbnail from "../../assets/blackjack-screenshot.png"
import sbThumbnail from "../../assets/smash-reviews-screenshot.png"
import ssThumbnail from "../../assets/styleswipe-screenshot.png"
import hhThumbnail from "../../assets/habit-hero-screenshot.png"

// components
import ProjectCard from "../ProjectCard/ProjectCard"

// css
import "../ProjectList/ProjectList.css"

function ProjectList() {
  const projects = [
    {
      title: "Habit Hero!",
      links: [
        {
          github: "https://github.com/officialmusto/habit-hero-front",
          deployedSite: "https://habit-hero-musto.netlify.app/",
        },
      ],
      thumbnail: hhThumbnail,
      desc: "Habit-Hero is a full-stack web application built using TypeScript, PostgreSQL, Express.js, Node.js, React, JWT, HTML, and CSS. With a visually appealing interface achieved through CSS styling techniques such as flexbox, box-shadow, border-radius, and background-color, Habit-Hero enhances the user experience. Error handling and feedback mechanisms have been implemented to ensure a seamless user journey with meaningful error messages. TypeScript enforces strict type checking, enhancing code readability and maintainability. The dynamic data and component re-rendering are managed efficiently through React's useState and useEffect hooks. Check out the project on GitHub and experience the power of Habit-Hero firsthand.",
      badges: [
        jsIcon,
        htmlIcon,
        cssIcon,
        gitIcon,
        mongoDbIcon,
        nodejsIcon,
        reactIcon,
        viteIcon,
        tsIcon,
        postgresIcon,
        sequelizeIcon,
      ],
    },
    {
      title: "StyleSwipe",
      links: [
        {
          github: "https://github.com/officialmusto/styleSwipe-front-end",
          deployedSite: "https://style-swipe.netlify.app/",
        },
      ],
      thumbnail: ssThumbnail,
      desc: "StyleSwipe is a collaborative MERN stack social media application developed with MongoDB, Express.js, Node.js, and React, featuring JWT authentication and a mobile-first design using Styled-Components and CSS. The project showcases efficient teamwork, delivering a fully functional application with CRUD operations and RESTful API calls in just two days. Dive into the project on GitHub or experience the app firsthand to explore StyleSwipe's features.",
      badges: [
        jsIcon,
        htmlIcon,
        cssIcon,
        gitIcon,
        mongoDbIcon,
        nodejsIcon,
        reactIcon,
        viteIcon,
      ],
    },
    {
      title: "Smash Reviews",
      links: [
        {
          github: "https://github.com/officialmusto/smash-bros-reviews",
          deployedSite: "https://smash-reviews.fly.dev/",
        },
      ],
      thumbnail: sbThumbnail,
      desc: "Smash Bros. Reviews is a feature-rich web application developed with Node.js, Express.js, and MongoDB, incorporating Google OAuth for user authentication. It includes a character controller module, leveraging Mongoose for efficient CRUD operations, and dynamically rendered EJS templates for character pages, reviews, and user authorization. Check out the project on GitHub or experience it firsthand to explore the world of Smash Bros. Reviews.",
      badges: [jsIcon, htmlIcon, cssIcon, gitIcon, mongoDbIcon, nodejsIcon],
    },
    {
      title: "BlackJack21",
      links: [
        {
          github: "https://github.com/officialmusto/blackjack21",
          deployedSite: "https://blackjack-musto.netlify.app/",
        },
      ],
      thumbnail: bjThumbnail,
      desc: "BlackJack 21 is a captivating web application showcasing strong problem-solving and algorithmic skills, implemented with JavaScript, HTML, and CSS, featuring immersive game logic, modular classes, and effective handling of edge cases for an engaging and realistic gaming experience.",
      badges: [jsIcon, htmlIcon, cssIcon, gitIcon],
    },
  ]

  return (
    <section id="portfolio">
      <h1 id="project-list-text">Project List</h1>
      {projects.map((project, idx) => {
        return <ProjectCard key={idx} project={project} cardIdx={idx} />
      })}
    </section>
  )
}

export default ProjectList
