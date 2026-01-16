import React, { useState } from "react";
import './ConsultationFormStyle.scss'
export default function ConsultationForm() {
  return (
    <div className="consultContainer">
        <div className="consultTitle">
            <h5>REQUEST A CONSULTATION</h5>
            <h2>Please fill out the form below and we will contact you shortly.</h2>
        </div>
        <div className="consultFormInput">
            <input placeholder="Full Name"/>
        </div>

        <div className="consultFormInput">
            <input placeholder="Phone Number"/>
        </div>

        <div className="consultFormInput">
            <input placeholder="Email Address"/>
        </div>

        <div className="consultFormInput">
          <select defaultValue="" required>
            <option value="" disabled>Select Area of Law</option>
            <option value="criminal">Criminal Law</option>
            <option value="personal-injury">Personal Injury</option>
            <option value="family">Family Law</option>
            <option value="immigration">Immigration Law</option>
            <option value="real-estate">Real Estate Law</option>
            <option value="business">Business Law</option>
        </select>
        </div>

        <div className="consultFormInput">
            <input placeholder="Message"/>
        </div>

        <div className="consultSubmitBtn">
            <button type="submit">Submit</button>
        </div>
     
        <div className="consultFooter">
            <p>Your information is confidential and will not be shared with third parties</p>
        </div>
    </div>
  );
}