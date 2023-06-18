// npm modules
import { Route, Routes } from 'react-router-dom'

// css
import './App.css'

// components
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import ProjectList from './components/ProjectList/ProjectList'
import Resume from './components/Resume/Resume'


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<About /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/portfolio" element={<ProjectList /> } />
        <Route path="/resume" element={<Resume /> } />
      </Routes>
    </>
  )
}
export default App
