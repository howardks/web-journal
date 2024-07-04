import logo from "./logo.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <span id="Navbar-Brand">
                <img src={logo} className="Header-Img" alt="Web Icon" />
                <span className="Header-Text">Web Journal</span>
            </span>
            <span id='Navbar'>
                <Link className="Nav-Link" to='/web-journal/'><button>Home</button></Link>
                <Link className="Nav-Link" to='/web-journal/login'><button>Login</button></Link>
                <Link className="Nav-Link" to='/web-journal/register'><button>Register</button></Link>
            </span>
        </div>
    )
}

export default Header;