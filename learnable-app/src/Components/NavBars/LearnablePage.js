import React from "react";
import "./NavBars.css";

function LearnableNavBar() {
  return (
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
  );
}

export default LearnableNavBar;
