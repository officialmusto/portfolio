// css
import "../ProfileCard/ProfileCard.css"

// assets
import profilePicture from "../../../public/assets/profile-picture.jpg"
import githubLogo from "../../../public/assets/github-logo.svg"
import emailLogo from "../../../public/assets/email-logo.svg"
import linkedinLogo from "../../../public/assets/linkedin-logo.svg"

function ProfileCard() {
  return (
    <>
      <section id="home">
        <div className="name">
          <h1>Christian Musto</h1>
        </div>
        <div className="profile-card">
          <img
            className="profile-picture"
            src={profilePicture}
            alt="profile picture"
          />
          <div className="links">
            <div id="email-link">
              <img
                src={emailLogo}
                alt="email logo"
                style={{ height: "23px" }}
              />
              <a href="mailto: christianmustoj@gmail.com">christianmustoj@gmail.com</a>
            </div>
            <div id="github-link">
              <img
                src={githubLogo}
                alt="github logo"
                style={{ height: "20px" }}
              />
              <a href="https://github.com/officialmusto">GitHub</a>
            </div>
            <div id="linkedin-link">
              <img
                src={linkedinLogo}
                alt="linkedin logo"
                style={{ height: "20px" }}
              />
              <a href="https://www.linkedin.com/in/christian-musto/">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfileCard
