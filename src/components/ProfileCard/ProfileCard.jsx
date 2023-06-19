// css
import '../ProfileCard/ProfileCard.css'

// assets
import profilePicture from '../../assets/profile-picture.jpg'

function ProfileCard() {
  return (
    <>
      <section id="home">
      <div className='profile-card'>
          <img 
          className="profile-picture"
          src={profilePicture} 
          alt="profile picture" />
          <div className='links'>
            <h3>Email: christianmustoj@gmail.com</h3>
            <h3>linkedIn: christianmustoj@gmail.com</h3>
            <h3>GitHub: christianmustoj@gmail.com</h3>
          </div>
      </div>
      </section>
    </>
  )
}

export default ProfileCard
