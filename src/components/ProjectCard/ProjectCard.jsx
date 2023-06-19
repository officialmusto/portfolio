// css
import '../ProjectCard/ProjectCard.css'



function ProjectCard( { project } ) {
  return (
    <>
      <h2>{project.title}</h2>
      <img src={project.thumbnail} alt="thumbnail" />
      <h2>{project.desc}</h2>
      {project.badges.map((badge, idx) => {
        return <img key={idx} src={badge} alt="badge icon" />
      })}
    </>
  )
}

export default ProjectCard

// ADD LINKS FOR GITHUB // DEPLOYMENT SITE