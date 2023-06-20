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
      desc: "StyleSwipe is a collaborative project I worked on with a team of three engineers. This MERN stack social media application was developed using MongoDB, Express.js, Node.js, React, JWT, HTML, and CSS. We successfully implemented JWT authentication to ensure secure user registration and login functionalities. Leveraging the power of the MERN stack, we built a fully functional application in just two days, incorporating all CRUD operations and RESTful API calls. With a mobile-first approach, we created a visually appealing application using Styled-Components and CSS, utilizing flexbox layouts. You can explore the project on GitHub or try out the app yourself.",
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
      desc: "Smash Bros. Reviews is a web application developed using Node.js, Express.js, Google OAuth, EJS, HTML, and CSS. The project features a character controller module that efficiently handles CRUD operations for characters and reviews, utilizing the Mongoose library for seamless MongoDB database interaction. I developed routes and corresponding controller functions to render character pages, display character reviews, create new reviews, edit existing reviews, and delete reviews. By leveraging EJS (Embedded JavaScript) templates, the website pages are dynamically rendered, including the index page for character selection, character show page with reviews, and forms for creating and editing reviews. User authentication and authorization functionalities have been integrated, ensuring only logged-in users can create, edit, or delete reviews, thanks to middleware restrictions. Explore the project on GitHub or try out the app yourself to dive into the world of Smash Bros. Reviews.",
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
      desc: "BlackJack 21 is a captivating web application developed using JavaScript, HTML, and CSS. This project showcases my strong problem-solving and algorithmic skills through the implementation of complex game logic. Player turns, card generation, hand calculations, and determining winners are all meticulously handled, ensuring an immersive and realistic gaming experience. To promote code modularity and reusability, I utilized advanced object-oriented programming principles, creating modular classes for cards, decks, and game management. Additionally, I demonstrated my problem-solving skills by effectively addressing edge cases, including player busting, the dealer's soft 17, and tie scenarios. Discover the thrill of BlackJack 21 by exploring the project on GitHub or playing the game directly from the app.",
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
