import React from "react";
import GenesysLogo from "../../Images/Landing page/GenesysLogo.jpg";
import "./NavBars.css";
import { NavLink } from "react-router-dom";

class LandingNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        hidden: "hidden",
        unHide: "unHidden"
    };
  }

  handleClick = (e) => {
    this.setState({
      unHide: "hidden",
      hidden: "unHidden"
    });
  };

  handleClose = (e) => {
    this.setState({
      unHide: "unHidden",
      hidden: "hidden"
    });
  }
  render() {
    return (
      <div>
        <nav className="nav-links mobile-hidden">
          <NavLink to="/">
            <img src={GenesysLogo} alt="Genesys Logo" />
          </NavLink>

          <section className="landing-nav-links" id="links-1">
            <ul>
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
          <section id="dev-studio">
            <p>build a product with</p>
            <button>
              <a href="#">devstudio</a>
            </button>
          </section>
        </nav>
        <nav className="mobile-nav-links desktop-hidden" >
           <section className="links-2" id={this.state.unHide}>
            <NavLink to="/">
              <img
                src={require("../../Icons/Asset 1@4x 1.png")}
                alt="Genesys Logo"
              />
            </NavLink>
              <img
                src={require("../../Icons/menu_24px.png")}
                onClick={this.handleClick}
                alt="Menu"
              />
          </section>
          <section className="landing-nav-links links-1" id={this.state.hidden}>
          <img
                src={require("../../Icons/clear_24px.png")}
                alt="Close"
                className="desktop-hidden"
                onClick={this.handleClose}
              />
            <ul>
              <li>
                <NavLink to="/Learnablehome" onClick={this.handleClose}>Learnable</NavLink>
              </li>
              <li>
                <NavLink to="/Agora" onClick={this.handleClose}>Agora</NavLink>
              </li>
              <li>
                <NavLink to="/Startzone" onClick={this.handleClose}>Startzone</NavLink>
              </li>
              <li>
                <NavLink to="/About" onClick={this.handleClose}>About</NavLink>
              </li>
              <li>
                <NavLink to="/Contact" onClick={this.handleClose}>Contact</NavLink>
              </li>
              <li>
                <NavLink to="/Devstudio" onClick={this.handleClose}>Dev Studio</NavLink>
              </li>
            </ul>
          </section>
        </nav>
      </div>
    );
  }
}

export default LandingNavBar;
