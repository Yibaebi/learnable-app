import React from "react";
import "./NavBars.css";
import LandingNavBar from "./LandingPage";
import { NavLink } from "react-router-dom";

class LearnableNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: "hidden",
      unHide: "unHidden",
    };
  }

  handleClick = (e) => {
    this.setState({
      unHide: "hidden",
      hidden: "unHidden",
    });
  };

  handleClose = (e) => {
    this.setState({
      unHide: "unHidden",
      hidden: "hidden",
    });
  };
  render() {
    return (
      <nav id="learnable-nav-container">
        <nav className="learnable-nav-links mobile-hidden">
          <button>
            <NavLink to="/Learnablehome">Home</NavLink>
          </button>
          <button>
            <NavLink to="/Software">Software Developers</NavLink>
          </button>
          <button>
            <NavLink to="/Product">Product Designers</NavLink>
          </button>
          <button>
            <NavLink to="/Apply">Apply</NavLink>
          </button>
          <button>
            <NavLink to="/Journal">Journal</NavLink>
          </button>
          <button>
            <NavLink to="/Faq">FAQ</NavLink>
          </button>
        </nav>

        <nav className="learnable-nav-links desktop-hidden">
          <section className="links-2" id={this.state.unHide}>
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
                <button>
                  <NavLink to="/Learnablehome">Home</NavLink>
                </button>
              </li>
              <li>
                <button>
                  <NavLink to="/Software">Software Developers</NavLink>
                </button>
              </li>
              <li>
                <button>
                  <NavLink to="/Product">Product Designers</NavLink>
                </button>
              </li>
              <li>
                <button>
                  <NavLink to="/Apply">Apply</NavLink>
                </button>
              </li>
              <li>
                <button>
                  <NavLink to="/Journal">Journal</NavLink>
                </button>
              </li>
              <li>
                <button>
                  <NavLink to="/Faq">FAQ</NavLink>
                </button>
              </li>
            </ul>
          </section>
        </nav>
      </nav>
    );
  }
}

export default LearnableNavBar;
