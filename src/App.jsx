// css
import './App.css'

// components
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import ProfileCard from './components/ProfileCard/ProfileCard'
// import ProjectList from './components/ProjectList/ProjectList'
// import Resume from './components/Resume/Resume'


function App() {

  return (
    <>
      <NavBar />
      <ProfileCard />
      <About />
    </>
  )
}
export default App