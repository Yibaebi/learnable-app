import React from "react";
import GenesysLogo from "../../Images/Landing page/GenesysLogo.jpg";
import "./NavBars.css";
import { NavLink } from "react-router-dom";

class LandingNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        display: "block",
      },
    };
  }

  handleClick = (e) => {
    alert(e.target.style.display);
  };
  render() {
    return (
      <div>
        <nav className="nav-links mobile-hidden">
          <NavLink to="/">
            <img src={GenesysLogo} alt="Genesys Logo" />
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
            <button><a href="#">devstudio</a></button>
          </section>
        </nav>
        <nav className="mobile-nav-links" id="desktop-hidden">
          <NavLink to="/">
            <img
              src={require("../../Icons/Asset 1@4x 1.png")}
              alt="Genesys Logo"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src={require("../../Icons/menu_24px.png")}
              onClick={this.handleClick}
              alt="Menu"
            />
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default LandingNavBar;
