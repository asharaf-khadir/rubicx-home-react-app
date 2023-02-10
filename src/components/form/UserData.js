import "./UserData.css";

export default function UserData() {
  return (
    <div className="form-section">

      <div className="form-heading">
        <div className="form-heading-box">
        <h1>GET IN TOUCH</h1>
        <h4>
          Please complete the form and we will
          <br />
          get back to you
        </h4>
        </div>
      </div>
      
      <form className="form-userdetails">
        <label>
          Name*<br />
          <input type={"text"} placeholder="Enter Your Name"></input>
        </label>
        <label>
          Email*<br />
          <input type={"text"} placeholder="Enter Your Email"></input>
        </label>
        <label>
          Mobile Number*<br />
          <input type={"text"} placeholder="Enter Your Mobile Number"></input>
        </label>
          <button type="submit" className="form-submitbutton">Register Now</button>
      </form>

    </div>
  );
}
