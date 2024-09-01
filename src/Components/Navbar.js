
import "./Navbar.css";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <>
    <div className='navbar'>
      <div className='links'>
          <Link to="/"className='nav-links'>
          Home
          </Link>
          <Link to="/About"className='nav-links'>
          About
          </Link>
          <Link to="/Contact"className='nav-links'>
          Contact
          </Link>
          <Link to="/Services"className='nav-links'>
          Services
          </Link>
      </div>
    </div>
    </>
  )
}

export default Navbar;