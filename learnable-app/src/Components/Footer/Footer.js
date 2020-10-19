import React from "react";
import FooterImage from "../../Images/Learnable Page/Footer (Learnable Page).png";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer">
      <div id="footer-content">
        <section id="footer-nav-buttons">
          <button>
            <NavLink to="/Software">Build Software</NavLink>
          </button>
          <button>
            <NavLink to="/Product">Design Different</NavLink>
          </button>
          <button>
            <NavLink to="/Apply">Apply Your Knowledge</NavLink>
          </button>
          <button>
            <NavLink to="/Faq">FAQ</NavLink>
          </button>
        </section>
        <section id="contact-us" className="mobile-hidden">
          <p>
            Our Local Campus center: Kilometer 7, Enugu/Port Harcourt,
            Expressway, Centenary City, Enugu. Nigeria.
          </p>
          <button>
            <NavLink to="#">Get in touch</NavLink>
          </button>
        </section>
        <section id="footer-dev-studio">
          <img src={FooterImage} alt="Dev Studio Image" />
          <div id="dev-studio-text">
            <p>
              Learnable is proud to be a collaborative effort of all the arms of
              our product team
            </p>
            <button>
              <NavLink to="#">Head to DevStudio</NavLink>
            </button>
          </div>
        </section>
        {/* <section id="contact-us" className="desktop-hidden">
          <p>
            Our Local Campus center: Kilometer 7, Enugu/Port Harcourt,
            Expressway, Centenary City, Enugu. Nigeria.
          </p>
          <button>
            <NavLink to="/Faq"></a>Get in touch
          </button>
        </section> */}
      </div>
      <div id="social-media-copyright">
        <section id="social-media-container">
          <NavLink to="#">
            <img src={require("../../Icons/Vector.svg")} alt="facebook" />
          </NavLink>
          <NavLink to="#">
            <img src={require("../../Icons/linkedin 1.svg")} alt="linkedin" />
          </NavLink>
          <NavLink to="#">
            <img src={require("../../Icons/instagram 1.svg")} alt="instagram" />
          </NavLink>
          <NavLink to="#">
            <img src={require("../../Icons/Vector3.svg")} alt="vimeo" />
          </NavLink>
          <NavLink to="#">
            <img src={require("../../Icons/Vector4.svg")} alt="twitter" />
          </NavLink>
          <NavLink to="#">
            <img
              src={require("../../Icons/youtube-logotype 1.svg")}
              alt="youtube"
            />
          </NavLink>
        </section>
        <section id="copyright">
          <NavLink to="#">&copy; Genesys 2020</NavLink>
          <NavLink to="#">Privacy Statement</NavLink>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
