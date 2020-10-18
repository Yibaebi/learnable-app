import React from "react";
import "./LandingPage.css";

function MainSubsection({ className, header, text, src, alt, href, buttonTitle}) {
  return (
    <section className={className}>
      <div className="section-image"><img src={src} alt={alt} /></div>
      <div className="main-subsection">
        <h3>{header}</h3>
        <p>{text}</p>
        <button id="main-subsection-button"><a href={href}>{buttonTitle}</a></button>
      </div>
    </section>
  );
}

export default MainSubsection;
