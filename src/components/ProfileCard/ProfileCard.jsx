// css
import "../ProfileCard/ProfileCard.css"

// assets
import profilePicture from "../../assets/profile-picture.jpg"
import githubLogo from "../../assets/github-logo.svg"
import emailLogo from "../../assets/email-logo.svg"
import linkedinLogo from "../../assets/linkedin-logo.svg"

function ProfileCard() {
  return (
    <>
      <section id="home">
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
              <a href="mailTo: christianmustoj@gmail.com">christianmustoj@gmail.com</a>
            </div>
            <div id="github-link">
              <img
                src={githubLogo}
                alt="github logo"
                style={{ height: "20px" }}
              />
              <a href="https://github.com/officialmusto?tab=repositories">GitHub</a>
            </div>
            <div id="linkedin-link">
              <img
                src={linkedinLogo}
                alt="email logo"
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
