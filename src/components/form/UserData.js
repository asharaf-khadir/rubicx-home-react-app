import "./UserData.css";
import React, { useState } from "react";

export default function UserData() {
  const [userName, setUserName] = React.useState("");
  const UsernameHandler = (event) => {
    setUserName(event.target.value);
  };
  console.log(userName);
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
          Name*
          <input
            type="text"
            name="fullname"
            placeholder="Enter Your Name"
            onChange={UsernameHandler}
            maxlength="32"
            pattern="[A-Za-z]{4}"
            required
          ></input>
        </label>

        <label>
          Email*
          <input
            type="email"
            name="fullname"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Enter valid email : example@example.com"
            placeholder="Enter Your Email"
            required
          ></input>
        </label>

        <label>
          Mobile Number*
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Your Mobile Number"
            pattern="[0-9]{10}"
            title="Enter valid 10 digit mobile number"
            required
          ></input>
        </label>

        <button type="submit" className="form-submitbutton">
          Register Now
        </button>
      </form>
    </div>
  );
}
