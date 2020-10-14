import React from "react";
import "./LearnablePageFooter.css";
import TopArrow from "../../Images/Go back to Top.svg"

function Subscribe() {
  return (
    <div id="subscribe-container">
      <a href=""><img src={TopArrow} alt="Go up" /></a>
      <div id="subscribe-section">
        <h2>
          Stay up to date on what we are doing and new learning opportunities
        </h2>
        <form id="subscribe-form">
          <div id="email-privacy">
            <input type="email" placeholder="Your email"></input>
            <a href="/privacy-policy"> View Privacy Policy </a>
          </div>
          <button type="submit"> SUBSCRIBE </button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
