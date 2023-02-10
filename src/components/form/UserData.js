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
        <label for="fullname">Name*</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Enter Your Name"
        ></input>
        <label for="email">Email*</label>
        <input
          type="text"
          id="email"
          name="firstname"
          placeholder="Enter Your Email"
        ></input>
        <label for="mobilenumber">Mobile Number*</label>
        <input
          type="text"
          id="mobilenumber"
          name="mobilenumber"
          placeholder="Enter Your Mobile Number"
        ></input>

        <button type="submit" className="form-submitbutton">
          Register Now
        </button>
      </form>
    </div>
  );
}
