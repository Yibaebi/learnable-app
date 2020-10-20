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
        <main className="software-main mobile-hidden">
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
                />
              </div>
            </section>
            <h2 id="learnable-hero-quote">
              “You are someone people can count on. Every day, you come in ready
              to make great things happen.”
            </h2>
            <section id="we-expect">
              <div id="we-expect-image-container">
                <img
                  src={require("../../../Images/Learnable software developer page/Photo.png")}
                  alt="profile"
                />
              </div>
              <div id="we-expect-text">
                <h3>We expect you to…</h3>
                <p>Play nice with other people. Love to code.</p>
                <p>
                  Be an actively engaging person. That means you are present,
                  motivated, and social. You know how to communicate effectively
                  with your teammates.
                </p>
                <p>
                  You understand the basics of programming and object-oriented
                  design and development.
                </p>
                <p>
                  Have an eye for detail. Your keen observation helps you catch
                  discrepancies and fix them quickly.
                </p>
                <p>
                  Be innately curious. Your love for technology is insatiable,
                  so you’re always researching and experimenting. Learning new
                  technical skills while on the job is something you look
                  forward to.
                </p>
                <p>
                  Appreciate good design. You want to make something that
                  doesn't just work flawlessly but looks amazing.
                </p>
              </div>
            </section>
          </section>
        </main>
        <main className="software-main desktop-hidden">
          <section className="software-main-container">
            <section id="learnable-hero">
              <div id="learnable-hero-text">
                <div id="learnable-hero-image">
                <img
                  src={require("../../../Mobile Images/cutout profile - Learnable Page.png")}
                  alt="profile"
                />
              </div>
                <h3>The Learnable Software Developer</h3>
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
                  in a while.</p>
              </div>
            </section>
            <h4 id="learnable-hero-quote">
              “You are someone people can count on. Every day, you come in ready
              to make great things happen.”
            </h4>
            <section id="we-expect">
              <div id="we-expect-image-container">
                <img
                  src={require("../../../Mobile Images/Software developer Image.png")}
                  alt="profile"
                />
              </div>
              <div id="we-expect-text">
                <h3>We expect you to…</h3>
                <p>Play nice with other people. Love to code.</p>
                <p>
                  Be an actively engaging person. That means you are present,
                  motivated, and social. You know how to communicate effectively
                  with your teammates.
                </p>
                <p>
                  You understand the basics of programming and object-oriented
                  design and development.
                </p>
                <p>
                  Have an eye for detail. Your keen observation helps you catch
                  discrepancies and fix them quickly.
                </p>
                <p>
                  Be innately curious. Your love for technology is insatiable,
                  so you’re always researching and experimenting. Learning new
                  technical skills while on the job is something you look
                  forward to.
                </p>
                <p>
                  Appreciate good design. You want to make something that
                  doesn't just work flawlessly but looks amazing.
                </p>
              </div>
            </section>
          </section>
        </main>
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default SoftwareDeveloper;
