import "./navbar.css";
import logo from "../../images/Logo.png";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" width={160} />
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link
              to="main"
              spy={true}
              smooth={true}
              offset={50}
              duration={500} 
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="aboouMe"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              to="myServices"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              My services
            </Link>
          </li>
          <li>
            <Link
              to="Portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
        </ul>

        <div className="hamburger" onClick={handleNav}>
          {nav ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
