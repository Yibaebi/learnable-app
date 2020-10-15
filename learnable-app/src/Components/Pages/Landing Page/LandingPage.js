import React from "react";
import LandingSubscribe from "../../Landing-Subscribe/Subscribe";
import LandingFooter from "../../Footer/Footer";
import "./LandingPage.css";
import MainSubsection from "./MainSubsection";
import "./MainSubsection.css";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: [
        "main-subsection-container",
        "main-subsection-container-reverse",
        "main-subsection-container cadet",
      ],
      header: ["Learnable", "Agora", "StartZone", "The best team in the world"],
      text: [
        "Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it.",
        "We are reimagining the workplace and how people work. Find out how our co-working spaces can help you enjoy the work that you do.",
        "The business environment is harsh for early-stage businesses. We can help you rise above it all.",
        "We work with the most amazing people our industry has to offer. They are really passionate about making a difference",
      ],
      src: [
        require("../../../Images/Landing page/Photo 3.jpg"),
        require("../../../Images/Landing page/Photo 2.jpg"),
        require("../../../Images/Landing page/Photo 1.jpg"),
        require("../../../Images/Landing page/Photo.jpg"),
      ],

      alt: ["Learnable", "Agora", "StartZone"],
      buttonTitle: ["Learn More", "See Team"],
    }
  }
  render() {
    const { className, header, text, src, alt, buttonTitle } = this.state;
    return (
      <main className="main-container" id="main-landing-page-container">
        <section id="landing-main-body">
          <div id="hero">
            <section id="hero-intro">
              <h1>
                Genesys provides opportunities for young Nigerian techies and
                opportunities to grow and innovate.
              </h1>
              <p>
                We understand that opportunities are scarce in these parts. We
                are either creating or exposing our people to these
                opportunities.
              </p>
            </section>

            <section id="hero-image">
              <div>
                <a href="">
                  <img
                    src={require("../../../Images/Landing page/Skip to Next Section.jpg")}
                    alt="Go down"
                  />
                </a>
              </div>
              <img
                src={require("../../../Images/Landing page/Rectangle 36.jpg")}
                alt="genesys opportunity image"
              />
            </section>
          </div>
          <MainSubsection
            className={className[0]}
            header={header[0]}
            text={text[0]}
            src={src[0]}
            alt={alt[0]}
            buttonTitle={buttonTitle[0]}
          />
          <MainSubsection
            className={className[1]}
            header={header[1]}
            text={text[1]}
            src={src[1]}
            alt={alt[1]}
            buttonTitle={buttonTitle[0]}
          />
          <MainSubsection
            className={className[0]}
            header={header[2]}
            text={text[2]}
            src={src[2]}
            alt={alt[2]}
            buttonTitle={buttonTitle[0]}
          />
          <section className="service-deliveries-container">
            <div className="service-deliveries">
              <figure id="fig-1">
                <img
                  src={require("../../../Images/Landing page/Rectangle 42.jpg")}
                  alt="service deliveries"
                />
                <figcaption>
                  <a href="/Genesys Ignite">Genesys Ignite</a>
                </figcaption>
              </figure>
              <figure id="fig-2">
                <div>
                  <img
                    src={require("../../../Images/Landing page/Rectangle 38.jpg")}
                    alt="service deliveries"
                  />
                  <figcaption>
                    <a href="/CodeVille">CodeVille</a>
                  </figcaption>
                </div>
                <div>
                  <img
                    src={require("../../../Images/Landing page/Rectangle 38-1.jpg")}
                    alt="service deliveries"
                  />
                  <figcaption>
                    <a href="/Pink">Pink summer of code</a>
                  </figcaption>
                </div>
              </figure>
            </div>
            <h3>Other things we do</h3>
          </section>
          <MainSubsection
            className={className[2]}
            header={header[3]}
            text={text[3]}
            src={src[3]}
            alt={alt[3]}
            buttonTitle={buttonTitle[1]}
          />
        </section>
        <LandingSubscribe />
        <LandingFooter />
      </main>
    );
  }
}

export default LandingPage;
