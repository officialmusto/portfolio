// assets
import cssIcon from "../../../public/assets/icons/css-icon.svg"
import gitIcon from "../../../public/assets/icons/git-icon.svg"
import htmlIcon from "../../../public/assets/icons/html-icon.svg"
import jsIcon from "../../../public/assets/icons/javascript-icon.svg"
import mongoDbIcon from "../../../public/assets/icons/mongodb-icon.svg"
import nodejsIcon from "../../../public/assets/icons/nodejs-icon.svg"
import postgresIcon from "../../../public/assets/icons/postgres-icon.svg"
import reactIcon from "../../../public/assets/icons/react-icon.svg"
import sequelizeIcon from "../../../public/assets/icons/sequelize-icon.svg"
import tsIcon from "../../../public/assets/icons/typescript-icon.svg"
import viteIcon from "../../../public/assets/icons/vite-icon.svg"
import bjThumbnail from "../../../public/assets/blackjack-screenshot.png"
import sbThumbnail from "../../../public/assets/smash-reviews-screenshot.png"
import ssThumbnail from "../../../public/assets/styleswipe-screenshot.png"
import hhThumbnail from "../../../public/assets/habit-hero-screenshot.png"

// components
import ProjectCard from "../ProjectCard/ProjectCard"

function ProjectList() {
  const projects = [
    {title: "BlackJack21",
    thumbnail: bjThumbnail,
    desc: "description of blackjack project.",
    badges: [
      jsIcon, htmlIcon, cssIcon, gitIcon 
    ]},
    {title: "Smash Bros. Reviews",
    thumbnail: sbThumbnail,
    desc: "description of Smash Bros. Reviews project.",
    badges: [
      jsIcon, htmlIcon, cssIcon, gitIcon, mongoDbIcon, nodejsIcon
    ]},
    {title: "StyleSwipe",
    thumbnail: ssThumbnail,
    desc: "description of StyleSwipe project.",
    badges: [
      jsIcon, htmlIcon, cssIcon, gitIcon, mongoDbIcon, nodejsIcon, reactIcon, viteIcon
    ]},
    {title: "Habit Hero!",
    thumbnail: hhThumbnail,
    desc: "description of Habit Hero! project.",
    badges: [
      jsIcon, htmlIcon, cssIcon, gitIcon, mongoDbIcon, nodejsIcon, reactIcon, viteIcon, tsIcon, postgresIcon, sequelizeIcon
    ]}
  ]

  return (
    <section id="portfolio">
      <h1>Project List</h1> 
      {projects.map((project, idx) => {
        return <ProjectCard key={idx} project={project} />
      })}
    </section>
  )
}

export default ProjectList