import React from "react";
import FooterImage from "../../Images/Learnable Page/Footer (Learnable Page).png";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div id="footer-content">
        <section id="footer-nav-buttons">
          <button>
            <a href="/Build">Build Software</a>
          </button>
          <button>
            <a href="/Design"></a>Design Different
          </button>
          <button>
            <a href="/Apply-knowledge"></a>Apply Your Knowledge
          </button>
          <button>
            <a href="/Faq"></a>FAQ
          </button>
        </section>
        <section id="contact-us" className="mobile-hidden">
          <p>
            Our Local Campus center: Kilometer 7, Enugu/Port Harcourt,
            Expressway, Centenary City, Enugu. Nigeria.
          </p>
          <button>
            <a href="/Faq"></a>Get in touch
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
              <a href="#"></a>Head to DevStudio
            </button>
          </div>
        </section>
        <section id="contact-us" className="desktop-hidden">
          <p>
            Our Local Campus center: Kilometer 7, Enugu/Port Harcourt,
            Expressway, Centenary City, Enugu. Nigeria.
          </p>
          <button>
            <a href="/Faq"></a>Get in touch
          </button>
        </section>
      </div>
      <div id="social-media-copyright">
        <section id="social-media-container">
          <a href="#">
            <img src={require("../../Icons/Vector.svg")} alt="facebook" />
          </a>
          <a href="#">
            <img src={require("../../Icons/linkedin 1.svg")} alt="linkedin" />
          </a>
          <a href="#">
            <img src={require("../../Icons/instagram 1.svg")} alt="instagram" />
          </a>
          <a href="#">
            <img src={require("../../Icons/Vector3.svg")} alt="vimeo" />
          </a>
          <a href="#">
            <img src={require("../../Icons/Vector4.svg")} alt="twitter" />
          </a>
          <a href="#">
            <img
              src={require("../../Icons/youtube-logotype 1.svg")}
              alt="youtube"
            />
          </a>
        </section>
        <section id="copyright">
          <a href="#">&copy; Genesys 2020</a>
          <a href="#">Privacy Statement</a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
