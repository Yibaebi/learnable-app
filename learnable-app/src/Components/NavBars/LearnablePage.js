import React from "react";
import "./NavBars.css";
import LandingNavBar from "./LandingPage"

function LearnableNavBar() {
  return (
    <nav id="learnable-nav-container">
      <LandingNavBar />
      <nav className="learnable-nav-links">
        <button>
          <a href="/">Home</a>
        </button>
        <button>
          <a href="/Software">Software Developers</a>
        </button>
        <button>
          <a href="/Product">Product Designers</a>
        </button>
        <button>
          <a href="/Apply">Apply</a>
        </button>
        <button>
          <a href="/Journal">Journal</a>
        </button>
        <button>
          <a href="/Faq">FAQ</a>
        </button>
      </nav>
    </nav>
  );
}

export default LearnableNavBar;
