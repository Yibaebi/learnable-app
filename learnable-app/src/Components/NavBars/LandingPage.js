import React from "react";
import GenesysLogo from "../../Images/Landing page/GenesysLogo.jpg";
import "./NavBars.css";

function LandingNavBar() {
  return (
    <nav className="nav-links">
      <img src={GenesysLogo} alt="Genesys Logo" className="mobile-hidden"/>
      
      <section className="landing-nav-links" id="links-1">
        <ul>
        <img src={require("../../Icons/clear_24px.png")} alt="Close" className="desktop-hidden"/>
          <li>
            <a href="/">Learnable</a>
          </li>
          <li>
            <a href="/Agora">Agora</a>
          </li>
          <li>
            <a href="/Startzone">Startzone</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li className="desktop-hidden">
            <a href="/Devstudio">Dev Studio</a>
          </li>
        </ul>
      </section>
      <section id="dev-studio" className="mobile-hidden">
            <p>build a product with</p>
            <button>devstudio</button>
      </section>
    </nav>
  );
}

export default LandingNavBar;
