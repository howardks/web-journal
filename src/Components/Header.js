import logo from "./logo.png";

function Header() {
    return (
        <div className="Header">
            <img src={logo} className="Header-Img" alt="Web Icon" />
            <span className="Header-Text">Web Journal</span>
        </div>
    )
}

export default Header;