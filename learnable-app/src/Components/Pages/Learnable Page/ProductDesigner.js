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
                <h1>The Learnable Product Designer</h1>
                <p>
                  At Genesys, you'll be exposed to every discipline in our
                  creative process – UX, UI, interaction design, and
                  copywriting. You’ll be part of a dynamic team that's made up
                  of like-minded, talented people. You'll work hard with them to
                  create things that will amaze everyone everywhere.
                </p>
                <p>
                  In addition to your team projects, you’ll be lending a hand to
                  the creative team. Participating in brainstorm sessions,
                  building winning pitches, preparing assets, and design
                  scriptures for productions, you'll be in the thick of it all.
                </p>
                <p> Oh, and you’ll make amazing friends while you're at it!</p>
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
        </main>
        <main className="software-main desktop-hidden">
          <section className="software-main-container">
            <section id="learnable-hero">
              <div id="learnable-hero-text">
                <div id="learnable-hero-image">
                  <img
                    src={require("../../../Mobile Images/Learnable Software group/Group 92.png")}
                    alt="profile"
                  />
                </div>
                <h3>The Learnable Product Designer</h3>
                <p>
                  At Genesys, you'll be exposed to every discipline in our
                  creative process – UX, UI, interaction design, and
                  copywriting. You’ll be part of a dynamic team that's made up
                  of like-minded, talented people. You'll work hard with them to
                  create things that will amaze everyone everywhere.
                </p>
                <p>
                  In addition to your team projects, you’ll be lending a hand to
                  the creative team. Participating in brainstorm sessions,
                  building winning pitches, preparing assets, and design
                  scriptures for productions, you'll be in the thick of it all.
                </p>
                <p> Oh, and you’ll make amazing friends while you're at it!</p>
              
              </div>
            </section>
            <h4 id="learnable-hero-quote">
              “You are someone people can count on. Every day, you come in ready
              to make great things happen.”
            </h4>
            <section id="we-expect">
              <div id="we-expect-image-container">
                <img
                  src={require("../../../Mobile Images/Learnable Software group/Photo.png")}
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
