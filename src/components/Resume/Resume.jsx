// assets
import resumeDownload from "../../../public/assets/christian-musto-resume.pdf"
import resumeP1 from "../../../public/assets/christian-musto-resume-1.png"
import resumeP2 from "../../../public/assets/christian-musto-resume-2.png"

// css
import '../Resume/Resume.css'

function Resume() {
  
  return (
    <>
      <section id="resume">
        <h1 id="resume-text">Resume Page</h1>
        <button className="download-button">
          <a href={resumeDownload} download>download
          </a>
        </button>
        <div className='resume-pages'>
          <img 
          src={resumeP1} 
          alt="resume page 1"
          style={{
            maxHeight: "550px", 
            borderRadius: "9px"}}
          />
          <img 
          src={resumeP2}
          alt="resume page 1"
          style={{
            maxHeight: "550px", 
            borderRadius: "9px",
            }}
          />
        </div>
      </section>
    </>
  )
}

export default Resume
