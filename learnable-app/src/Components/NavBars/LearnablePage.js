import React from "react";
import "./NavBars.css";
import LandingNavBar from "./LandingPage";
import { NavLink } from "react-router-dom";

function LearnableNavBar() {
  return (
    <nav id="learnable-nav-container">
      <LandingNavBar />
      <nav className="learnable-nav-links">
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
    </nav>
  );
}

export default LearnableNavBar;
