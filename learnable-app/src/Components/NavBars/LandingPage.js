import React from "react";
import GenesysLogo from "../../Images/Landing page/GenesysLogo.jpg";
import "./NavBars.css";

function LandingNavBar() {
  return (
    <nav className="nav-links">
      <img src={GenesysLogo} alt="Genesys Logo" />
      <section className="landing-nav-links" id="links-1">
        <ul>
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
        </ul>
      </section>
      <section id="dev-studio">
            <p>build a product with</p>
            <button>devstudio</button>
      </section>
    </nav>
  );
}

export default LandingNavBar;
