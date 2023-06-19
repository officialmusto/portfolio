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


function ProjectList() {
  const projects = [
    {title: "BlackJack21",
    desc: "description of blackjack project.",
    badges: [
      jsIcon, htmlIcon, cssIcon, gitIcon 
    ]},
    {title: "Smash Bros. Reviews",
    desc: "description of Smash Bros. Reviews project.",
    badges: [
      jsIcon, htmlIcon, cssIcon, gitIcon, mongoDbIcon, nodejsIcon
    ]},
    {title: "StyleSwipe",
    desc: "description of StyleSwipe project.",
    badges: [
      jsIcon, htmlIcon, cssIcon, gitIcon, mongoDbIcon, nodejsIcon, reactIcon, viteIcon
    ]},
    {title: "Habit Hero!",
    desc: "description of Habit Hero! project.",
    badges: [
      jsIcon, htmlIcon, cssIcon, gitIcon, mongoDbIcon, nodejsIcon, reactIcon, viteIcon, tsIcon, postgresIcon, sequelizeIcon
    ]}
  ]


  return (
    <>
      <h1>Project List</h1> 
      {projects.map(project => {
        return <>
        <h2>{project.title}</h2>
        <h2>{project.desc}</h2>
        {project.badges.map((badge, idx) => {
          return <img key={idx} src={badge} alt="badge icon" />
        })}</>
      })}
    </>
  )
}

export default ProjectList



/* each project card will have
1. title
2. img
3. desc.
4. links-to github repo & deployed site
5. languages-used badges

-create an array of objects
-each object will have those 5 properties

-map through array of badges in langUsedBadges // or add badges manually to project

-map through the array

drill project card props if necessary 

*/