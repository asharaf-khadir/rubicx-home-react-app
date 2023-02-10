import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <a href="#" className="navbar-logo">
        <img src="" alt="RUBIXE LOGO"></img>
      </a>
      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="#">HOME</a>
        </li>
        <li className="navbar-item">
          <a href="#">SERVICES</a>
        </li>
        <li className="navbar-item">
          <a href="#">PRODUCTS</a>
        </li>
        <li className="navbar-item">
          <a href="#">AI INTERNSHIP</a>
        </li>
        <li className="navbar-item">
          <a href="#">CAREER</a>
        </li>
        <li className="navbar-item">
          <a href="#">BLOG</a>
        </li>
        <li className="navbar-item">
          <a href="#">ABOUT</a>
        </li>
        <li className="navbar-item">
          <a href="#">CONTACT US</a>
        </li>
      </ul>
    </div>
  );
}
