import React from "react";
import "../LearnablePage-Subscribe/Subscribe.css";
import TopArrow from "../../Images/Go back to Top.svg"

function Subscribe() {
  return (
    <section id="subscribe-container">
    <a href="#" className="mobile-hidden" ><img src={TopArrow} alt="Go up" /></a>
    <div className="subscribe-section learnable" id="subscribe-section-landing">
      <h2>
        Stay up to date on what we are doing and new learning opportunities
      </h2>
      <form id="subscribe-form">
        <div id="email-privacy">
          <input type="email" placeholder="Your email"></input>
          <a href="/privacy-policy" className="mobile-hidden"> View Privacy Policy </a>
        </div>
        <button type="submit"> SUBSCRIBE </button>
      </form>
    </div>
  </section>
  );
}

export default Subscribe;
