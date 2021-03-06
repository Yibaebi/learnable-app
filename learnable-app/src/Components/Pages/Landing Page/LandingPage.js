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

          <main className="main-container mobile-hidden" id="main-landing-page-container">
            <section id="landing-main-body">
             <div id="hero">
                <section id="hero-intro">
                  <h1>
                    Genesys provides opportunities for young Nigerian techies
                    and opportunities to grow and innovate.
                  </h1>
                  <p>
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
              <section className="main-subsection-container">
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
          <main className="main-container desktop-hidden" id="main-landing-page-container" >
            <section>
             <div id="hero">
                <section id="hero-intro">
                  <h1>
                    Genesys provides opportunities for young Nigerian techies
                    and opportunities to grow and innovate.
                  </h1>
                  <img
                    src={require("../../../Mobile Images/Landing First group.png")}
                    alt={alt}
                  />
                  <p>
                    We understand that opportunities are scarce in these parts.
                    We are either creating or exposing our people to these
                    opportunities.
                  </p>
                </section>
              </div>
              <section className="main-subsection-container">
                <div className="section-image">
                  <img
                    src={require("../../../Mobile Images/Landing group 1/Photo-2.png")}
                    alt={alt[0]}
                  />
                </div>
                <div className="main-subsection">
                  <h3>Learnable</h3>
                  <p>Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it.</p>
                  <button id="main-subsection-button">
                    <a href="#">Learn more</a>
                  </button>
                </div>
              </section>
              
              <section className="main-subsection-container">
                <div className="section-image">
                  <img
                    src={require("../../../Mobile Images/Landing group 1/Photo-1.png")}
                    alt={alt[0]}
                  />
                </div>
                <div className="main-subsection">
                  <h3>Agora</h3>
                  <p>We are reimagining the workplace and how people work. Find out how our co-working spaces can help you enjoy the work that you do.</p>
                  <button id="main-subsection-button">
                    <a href="#">Learn more</a>
                  </button>
                </div>
              </section>
              <section className="main-subsection-container">
                <div className="section-image">
                  <img
                    src={require("../../../Mobile Images/Landing group 1/Photo-1.png")}
                    alt={alt}
                  />
                </div>
                <div className="main-subsection">
                  <h3>StartZone</h3>
                  <p>The business environment is harsh for early-stage businesses. We can help you rise above it all.</p>
                  <button id="main-subsection-button">
                    <a href="#">Learn more</a>
                  </button>
                </div>
              </section>
             
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
                </div>
                <h3>Other things we do</h3>
              </section>
              
              <MainSubsection
                className="main-subsection-container cadet knowledge"
                header={header[3]}
                text={text[3]}
                src={require("../../../Mobile Images/Landing group 1/Photo.png")}
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
