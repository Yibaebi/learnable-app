import React from "react";
import LandingNavBar from "../../NavBars/LandingPage";
import LandingSubscribe from "../../Landing-Subscribe/Subscribe";
import LandingFooter from "../../Footer/Footer";
import "./LandingPage.css";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
        </section>
        <LandingSubscribe />
        <LandingFooter />
      </main>
    );
  }
}

export default LandingPage;
