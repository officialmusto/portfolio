// css
import "../ProjectCard/ProjectCard.css"

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2 id="title">{project.title}</h2>
      <img id="thumbnail" src={project.thumbnail} alt="thumbnail" />
      <h2 id="desc">{project.desc}</h2>
      <div className="badges">
        <h3>tools used:</h3>
        {project.badges.map((badge, idx) => {
          return <img id="badge" key={idx} src={badge} alt="badge icon" />
        })}
      </div>
    </div>
  )
}

export default ProjectCard

// ADD LINKS FOR GITHUB // DEPLOYMENT SITE
