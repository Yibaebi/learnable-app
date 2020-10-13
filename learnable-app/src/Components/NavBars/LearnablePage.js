import React from "react";
import "./NavBars.css";

function LearnableNavBar() {
  return (
    <nav className="learnable-nav-links">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Software">Software Developers</a>
        </li>
        <li>
          <a href="/Product">Product Designers</a>
        </li>
        <li>
          <a href="/Apply">Apply</a>
        </li>
        <li>
          <a href="/Journal">Journal</a>
        </li>
        <li>
          <a href="/Faq">FAQ</a>
        </li>
      </ul>
    </nav>
  );
}

export default LearnableNavBar;
