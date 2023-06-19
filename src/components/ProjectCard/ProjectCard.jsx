/* eslint-disable react/prop-types */

// assets
import githubIcon from "../../../public/assets/github-logo.svg"
import deployedIcon from "../../../public/assets/icons/deployed-icon.svg"

// css
import "../ProjectCard/ProjectCard.css"

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2 id="title">{project.title}</h2>
      {project.links.map((link, idx) => {
        return (
          <>
            <div className="project-links">
              <div className="github-link">
                <img
                    src={githubIcon}
                    alt="github-icon"
                    style={{ maxHeight: "20px" }}
                />
                <a id="github-text" key={idx} href={link.github}>
                  github
                </a>
              </div>
              <div className="deployed-link">
                <img
                  src={deployedIcon}
                  alt="deployed-icon"
                  style={{ maxHeight: "20px" }}
                />
                <a id="deployed-text" key={idx} href={link.deployedSite}>
                  deployed site
                </a>
              </div>
            </div>
          </>
        )
      })}
      <img id="thumbnail" src={project.thumbnail} alt="thumbnail" />
      <h2 id="desc">{project.desc}</h2>
      <div className="badges">
        {project.badges.map((badge, idx) => {
          return <img id="badge" key={idx} src={badge} alt="badge icon" />
        })}
      </div>
    </div>
  )
}

export default ProjectCard
