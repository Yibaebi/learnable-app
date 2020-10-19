import React from "react";
import LandingSubscribe from "../../Landing-Subscribe/Subscribe";
import LandingFooter from "../../Footer/Footer";
import "./LandingPage.css";
import MainSubsection from "./MainSubsection";
import "./MainSubsection.css";
import HamburgerMenu from "../../NavBars/HamburgerMenu";


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: [
        "main-subsection-container",
        "main-subsection-container-reverse",
        "main-subsection-container cadet knowledge",
        "main-subsection-container desktop-hidden",
        "main-subsection-container mobile-hidden",
        "main-subsection-container-reverse desktop-hidden",
        "main-subsection-container-reverse mobile-hidden",
        "main-subsection-container cadet knowledge desktop-hidden",
        "main-subsection-container cadet knowledge mobile-hidden",
      ],
      header: ["Learnable", "Agora", "StartZone", "The best team in the world"],
      text: [
        "Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it.",
        "We are reimagining the workplace and how people work. Find out how our co-working spaces can help you enjoy the work that you do.",
        "The business environment is harsh for early-stage businesses. We can help you rise above it all.",
        "We work with the most amazing people our industry has to offer. They are really passionate about making a difference",
      ],

      alt: ["Learnable", "Agora", "StartZone"],
      buttonTitle: ["Learn More", "See Team"],
    };
  }
  render() {
    const { className, header, text, alt, buttonTitle } = this.state;
    return (
        <div className="learnableapp-page">
          <header>
            <HamburgerMenu />
          </header>
          <main className="main-container" id="main-landing-page-container">
            <section id="landing-main-body">
             <div id="hero">
                <section id="hero-intro">
                  <h1>
                    Genesys provides opportunities for young Nigerian techies
                    and opportunities to grow and innovate.
                  </h1>
                  <p className="mobile-hidden">
                    We understand that opportunities are scarce in these parts.
                    We are either creating or exposing our people to these
                    opportunities.
                  </p>
                  <div className="desktop-hidden">
                    <img
                      src={require("../../../Images/Mobile - landing/Rectangle 36.png")}
                      alt="Go down"
                    />
                  </div>
                  <p className="desktop-hidden">
                    We understand that opportunities are scarce in these parts.
                    We are either creating or exposing our people to these
                    opportunities.
                  </p>
                </section>
                <section id="hero-image" className="mobile-hidden">
                  <div>
                    <a href="#">
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
              {/* <MainSubsection
                className={className[5]}
                header={header[0]}
                text={text[0]}
                src={require("../../../Images/Landing page/Photo 3.jpg")}
                alt={alt[0]}
                buttonTitle={buttonTitle[0]}
              /> */}

              <section className="main-subsection-container" id="mobile-hidden">
                <div className="section-image">
                  <img
                    src={require("../../../Images/Landing page/Photo 3.jpg")}
                    alt={alt}
                  />
                </div>
                <div className="main-subsection">
                  <h3>{header[0]}</h3>
                  <p>{text[0]}</p>
                  <button id="main-subsection-button">
                    <a href="#">{buttonTitle[0]}</a>
                  </button>
                </div>
              </section>

              <section className="main-subsection-container-reverse" id="mobile-hidden">
                <div className="section-image">
                  <img
                    src={require("../../../Images/Landing page/Photo 2.jpg")}
                    alt={alt}
                  />
                </div>
                <div className="main-subsection">
                  <h3>{header[1]}</h3>
                  <p>{text[1]}</p>
                  <button id="main-subsection-button">
                    <a href="#">{buttonTitle[0]}</a>
                  </button>
                </div>
              </section>

              <section className="main-subsection-container" id="mobile-hidden">
                <div className="section-image">
                  <img
                    src={require("../../../Images/Landing page/Photo 1.jpg")}
                    alt={alt}
                  />
                </div>
                <div className="main-subsection">
                  <h3>{header[2]}</h3>
                  <p>{text[2]}</p>
                  <button id="main-subsection-button">
                    <a href="#">{buttonTitle[0]}</a>
                  </button>
                </div>
              </section>

              {/* <MainSubsection
                className={className[1]}
                header={header[1]}
                text={text[1]}
                src={require("../../../Images/Mobile - landing/Photo-1.png")}
                alt={alt[1]}
                buttonTitle={buttonTitle[0]}
              /> */}

              {/* <MainSubsection
                className={className[0]}
                header={header[2]}
                text={text[2]}
                src={require("../../../Images/Mobile - landing/Photo-1.png")}
                alt={alt[2]}
                buttonTitle={buttonTitle[0]}
              /> */}
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
                    <img
                      src={require("../../../Images/Landing page/Rectangle 38.jpg")}
                      alt="service deliveries"
                      className="desktop-hidden"
                    />
                    <figcaption className="desktop-hidden">
                      <a href="/CodeVille">CodeVille</a>
                    </figcaption>
                    <img
                      src={require("../../../Images/Landing page/Rectangle 38-1.jpg")}
                      alt="service deliveries"
                      className="desktop-hidden"
                    />
                    <figcaption className="desktop-hidden">
                      <a href="/Pink">Pink summer of code</a>
                    </figcaption>
                  </figure>
                  <figure id="fig-2" className="mobile-hidden">
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
                src={require("../../../Images/Landing page/Photo.jpg")}
                alt={alt[3]}
                buttonTitle={buttonTitle[1]}
              />
            </section>
            <LandingSubscribe />
          </main>
          <LandingFooter />
        </div>
    );
  }
}

export default LandingPage;
