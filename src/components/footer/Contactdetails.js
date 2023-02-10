import "./Contactdetails.css"

export default function Contactdetails(){
    return (
      <div className="footerbar">
        <div className="footer-about">
          <h1 className="footer-title">ABOUT US</h1>
          <p className="footer-about-item">
            RubixeTM is a global technology company specializing in disruptive
            technologies - Artificial Intelligence (AI), Machine Learning,
            Robotic Process Automation (RPA), BlockChain and Internet of Things
            (IoT). Rubixe mission to enable businesses to leverage the full
            potential of disruptive technologies to stay competitive in the
            market.
          </p>
        </div>
        <div className="footer-menu">
          <h1 className="footer-title">MENU</h1>
          <h2 className="footer-menu-item">Home</h2>
          <h2 className="footer-menu-item">Services</h2>
          <h2 className="footer-menu-item">Products</h2>
          <h2 className="footer-menu-item">Career</h2>
        </div>
        <div className="footer-learn">
          <h1 className="footer-title">LEARN MORE</h1>
          <h2 className="footer-learn-item">About</h2>
          <h2 className="footer-learn-item">Contact</h2>
        </div>
        <div className="footer-address">
          <h1 className="footer-title">ADDRESS</h1>
          <p className="footer-address-item">
            Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru,
            Karnataka 560068 Phone: 0804-717-8999 Email: hi@rubixe.com SOCIAL
            MEDIA
          </p>
        </div>
      </div>
    );
}