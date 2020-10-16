import React from "react";
import LandingNavBar from "../../NavBars/LearnablePage";
import "./Home.css";

class LearnableHome extends React.Component {
  render() {
    return (
      <div>
        <header>
          <LandingNavBar />
        </header>
        <main className="learnable-homepage">
          <section id="notification">
            <div id="notification-main">
              <div id="notification-1">
                <h4>Coming soon: Learnable ‘20</h4>
                <p>
                  We've started taking in applications for the next batch of
                  learnable interns. Applications are on till the 21st of
                  Febuary
                </p>
              </div>
              <div id="notification-2">
                <a href="/download">Click link to download...</a>
                <h4>Learnable ‘20 Brochure</h4>
              </div>
            </div>
          </section>
          <div id="hero" className="learnable-homepage">
            <section id="hero-intro" className="learnable-homepage-hero">
              <h1>Everything is Learnable</h1>
              <p>
                Learnable is the perfect product development internship program
                brought to you by Genesys.
              </p>
            </section>
            <section className="learnable-hero-media">
              <aside id="explore-options">
                <div>
                  <h5>
                    <a href="/development">Development</a>
                    <img
                      src={require("../../../Icons/right-arrow.svg")}
                      alt="go to"
                    />
                  </h5>
                  <p>What to expect</p>
                </div>
                <div>
                  <h5>
                    <a href="/development">Product Design</a>
                    <img
                      src={require("../../../Icons/right-arrow-2.jpg")}
                      alt="go to"
                    />
                  </h5>
                  <p>What to expect</p>
                </div>
              </aside>

              <aside id="learnable-hero-media">
                <div>
                  <a href="">
                    <img
                      src={require("../../../Images/Landing page/Skip to Next Section.jpg")}
                      alt="Go down"
                    />
                  </a>
                </div>
                <img
                  src={require("../../../Images/Learnable Page/Rectangle 4.png")}
                  alt="genesys opportunity image"
                />
              </aside>
              <aside id="hero-statistics">
                <div id="statistics">
                  <div className="item">
                    <h3>305</h3>
                    <p>Young Software Developers Trained</p>
                  </div>
                  <div className="item">
                    <h3>2100</h3>
                    <p>Tech Enthusiasts</p>
                  </div>
                  <div className="item">
                    <h3>8</h3>
                    <p>Startups Incubated</p>
                  </div>
                  <div className="item">
                    <h3>250</h3>
                    <p>Small Businesses supported</p>
                  </div>
                </div>
              </aside>
            </section>
          </div>
          <section id="we-make-people">
            <div id="we-make-people-desc">
              <h3>We Make People Great</h3>
              <p>
                As part of our calculated efforts to contribute to the emerging
                knowledge and skills driven economy of Nigeria, Learnable is a
                6-month product development training program with an emphasis on
                software programming and product design. It is for outstanding
                young individuals who are passionate about building a career in
                the software industry.
              </p>
              <p>
                We primarily educate and groom software developers and
                designers, preparing them for the industry.
              </p>
            </div>
            <div class="image-cutout">
              <img
                src={require("../../../Images/Learnable Page/Cutout 1.png")}
              />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default LearnableHome;
