// npm modules
import { HashLink } from 'react-router-hash-link'

// css
import '../NavBar/NavBar.css'

function NavBar() {
  return (
    <nav className='nav'>
    <HashLink smooth to="/#home">
        home
    </HashLink>

    <HashLink smooth to="/#about">
      about
    </HashLink>

    <HashLink smooth to="/#portfolio">
      portfolio
    </HashLink>

    <HashLink smooth to="/#resume">
      resume
    </HashLink>
</nav>
  )
}

export default NavBar
