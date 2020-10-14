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
        <section id="contact-us">
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
              <a href="/Faq"></a>Head to DevStudio
            </button>
          </div>
        </section>
      </div>
      <div id="social-media-copyright">
        <section id="social-media-container">
          <a href=""><img src={require("../../Icons/Vector.svg")} alt="" /></a>
          <a href=""><img src={require("../../Icons/linkedin 1.svg")} alt="" /></a>
          <a href=""><img src={require("../../Icons/instagram 1.svg")} alt="" /></a>
          <a href=""><img src={require("../../Icons/Vector3.svg")} alt="" /></a>
          <a href=""><img src={require("../../Icons/Vector4.svg")} alt="" /></a>
          <a href=""><img src={require("../../Icons/youtube-logotype 1.svg")} alt="" /></a>
        </section>
        <section id="copyright">
          <a href="">&copy; Genesys 2020</a>
          <a href="">Privacy Statement</a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
