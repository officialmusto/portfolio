// css
import '../ProfileCard/ProfileCard.css'

// assets
import profilePicture from '../../assets/profile-picture.jpg'

function ProfileCard() {
  return (
    <>
      <div className='profile-card'>
        <img 
        className="profile-picture"
        src={profilePicture} 
        alt="profile picture" />

      </div>
    </>
  )
}

export default ProfileCard
