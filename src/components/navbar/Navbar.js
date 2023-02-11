import "./Navbar.css";
import clogo from "../images/rubixe-logo.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={clogo} alt="RUBIXE LOGO" width={"90px"} height={"30px"}></img>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">HOME</li>
        <li className="navbar-item">SERVICES</li>
        <li className="navbar-item">PRODUCTS</li>
        <li className="navbar-item">AI INTERNSHIP</li>
        <li className="navbar-item">CAREER</li>
        <li className="navbar-item">BLOG</li>
        <li className="navbar-item">ABOUT</li>
        <li className="navbar-item">CONTACT US</li>
      </ul>
    </div>
  );
}
