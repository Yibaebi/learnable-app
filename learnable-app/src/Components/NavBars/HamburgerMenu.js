import React from "react";
import GenesysLogo from "../../Images/Landing page/GenesysLogo.jpg";
import "./NavBars.css";
import { NavLink } from "react-router-dom";

function HamburgerMenu() {
  return (
      <nav className="nav-links" id="desktop-hidden">
        <NavLink to="/">
          <img src={GenesysLogo} alt="Genesys Logo" className="mobile-hidden" />
        </NavLink>

        <section className="landing-nav-links" id="links-1">
          <ul>
            <img
              src={require("../../Icons/clear_24px.png")}
              alt="Close"
              className="desktop-hidden"
            />
            <li>
              <NavLink to="/Learnablehome">Learnable</NavLink>
            </li>
            <li>
              <NavLink to="/Agora">Agora</NavLink>
            </li>
            <li>
              <NavLink to="/Startzone">Startzone</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li className="desktop-hidden">
              <NavLink to="/Devstudio">Dev Studio</NavLink>
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

export default HamburgerMenu;
