import React from "react";
import "./SoftwareDeveloper.css";
import LearnableNavBar from "../../NavBars/LearnablePage";
import Subscribe from "../../LearnablePage-Subscribe/Subscribe";
import Footer from "../../Footer/Footer";

class SoftwareDeveloper extends React.Component {
  render() {
    return (
      <div>
        <header>
          <LearnableNavBar />
        </header>
        <main className="software-main">
          <section className="software-main-container">
            <section id="learnable-hero">
              <div id="learnable-hero-text">
                <h1>The Learnable Software Developer</h1>
                <p>
                  Creativity means a lot to us. So we look for people who can
                  think both logistically and artistically, and who know that
                  limits are made to be pushed. We value skill and aptitude, but
                  we honor those who care about working with their team to add
                  the Genesys flavour to every project.
                </p>
                <p>
                  As a developer, being part of the team exposes you to a range
                  of diverse, like-minded talented people who are sure to make
                  the experience fun for you. You’ll get a shot at building
                  amazing things, developing yourself, learning on the job,
                  while exchanging healthy jokes and having random hangouts once
                  in a while.
                </p>
              </div>
              <div className="image-cutout" id="learnable-hero-image">
                <img
                  src={require("../../../Images/Learnable Page/Cutout 1.png")}
                  alt="profile"
                  id="product-image"
                />
              </div>
            </section>
            <h2 id="learnable-hero-quote" className="tangelo">
              “The greats weren’t great because at birth they could paint. The
              greats were great because they painted a lot.” <br></br> -
              Macklemore
            </h2>
            <section id="we-expect">
              <div id="we-expect-image-container">
                <img
                  src={require("../../../Images/Learnable product designer page/Photo.png")}
                  alt="profile"
                />
              </div>
              <div id="we-expect-text">
                <h3>We expect you to…</h3>
                <p>Play nice with other people. </p>
                <p>
                  Be an actively engaging person. That means you are present,
                  motivated, and social.
                </p>
                <p>Understand how to use the Figma design software</p>
                <p>
                  Be able to create initial design layouts with confidence and
                  know-how to effectively communicate concepts to everyone on
                  your team.
                </p>
                <p>
                  Have a basic understanding of design principles and theories
                  To have creative courage. This is a tough industry, only the
                  brave and sturdy remain.
                </p>
                <p>
                  Be prepared to defend your decisions and take constructive
                  criticism.
                </p>
                <caption>
                  To us, beauty without substance has no value. At Genesys,
                  design thinking and execution are equally important, so we’re
                  constantly on the lookout for not only the how but also the
                  why.
                </caption>
              </div>
            </section>
          </section>
          <Subscribe />
        </main>
        <Footer />
      </div>
    );
  }
}

export default SoftwareDeveloper;
