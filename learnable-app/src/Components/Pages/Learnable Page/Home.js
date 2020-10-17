import React from "react";
import LandingNavBar from "../../NavBars/LearnablePage";
import Subscribe from "../../LearnablePage-Subscribe/Subscribe";
import MainSubSection from "../Landing Page/MainSubsection";
import Footer from "../../Footer/Footer";
import "./Home.css";

class LearnableHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: [
        "main-subsection-container",
        "main-subsection-container-reverse",
        "main-subsection-container cadet knowledge",
      ],
      header: [
        "An Unusual Learning Experience",
        "Who is Eligible?",
        "Our Culture",
        "Learning can be fun…",
        "Learning doesn’t always have to be in the classroom",
      ],
      text: [
        "At Genesys, we believe in the learning processes as much as we believe in the results. By applying a combination of active and social learning methodologies, we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.",
        "Our methods over the years have helped us discover ways to take education out of the classroom. We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity to learn.",
        "To be a participant of learnable, you need to be a young and passionate person interested in launching a super tech career. You will need to have foundational knowledge in whatever learning path you are applying for and be available for the six month duration of the program.",
        "To become a part of the Genesys family, you must express some of the qualities we consider important. You are someone that takes responsibilities and initiatives. You will also express the ability to produce quality stuff in good time with high consistency.",
        "Our culture are the unspoken things that make us who we are at Genesys. To become one of us, you need to be like the rest of us. We believe that excellence is a culture, and we are committed to a philosophy of consistent improvement in everything we do. We are passionate, candid and we trust in the power of collaboration.",
        "We believe learning should be a fun experience. For this reason, we don’t do all the learning in the classroom.",
        "The Learnable experience can not be complete without the bag of fun times which you’ll have. To us, every task is an opportunity to have some fun. But we do well to throw in a good number of activities to add to this. You will find yourself partaking in a lot of healthy activities such as cooking, sports, music, hangouts, and even random dates.",
        "Trust us when we say we know how to have fun.",
        "We have designed other learning activities that aren’t classroom-based. You will learn how to be a better person, how to have good conversations, how to work better with people and most importantly, how to lead other people. Hey! We’ll even teach you how to run a business during the Learnable Business Sessions.",
      ],

      alt: ["make people great", "make people great", "make people great"],
      panel: "panel",

      faq: [
        {
          headerText: "How many people can attend a course?",
          text: "50",
          id: 1,
          panel: "panel",
        },
        {
          headerText: "What’s the learning experience like?",
          text: "Lorem ipsum...",
          id: 2,
          panel: "panel",
        },
        {
          headerText: "Who are the coaches?",
          text: "Lorem ipsum...",
          id: 3,
          panel: "panel",
        },
        {
          headerText: "How far in advance should we book?",
          text: "Lorem ipsum...",
          id: 4,
          panel: "panel",
        },
        {
          headerText: "Can you customize your courses?",
          text: "Lorem ipsum...",
          id: 5,
          panel: "panel",
        },
      ],
    };
  }

  handleClick = (e) => {
    alert(e.target);
    let newFaq = this.state.faq.forEach((item) => {
      if (item.id === +e.target.key) {
        item.panel = "showPanel";
      } else {
        item.panel = "panel";
      }
    });

    this.setState({
      faq: newFaq,
    });
  };
  render() {
    const {
      className,
      header,
      text,
      src,
      alt,
      buttonTitle,
      panel,
      faq,
    } = this.state;

    const faqButtons = faq.map((item) => (
      <section key={item.id} onClick={this.handleClick}>
        <h5 className="accordion">
          {item.headerText}
          <img src={require("../../../Icons/arrow down.png")} alt="expand" />
        </h5>
        <div className={item.panel}>
          <p>{item.text}</p>
        </div>
      </section>
    ));

    const journalCopy = (
      <div className="journal-item">
        <button>Inspiration</button>
        <h4>
          Learn Design Thinking like a Pro and Build Projects that People will
          care about
        </h4>
        <p>David Mong, Apr 9, 2020</p>
      </div>
    );

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
              <br></br>
              <br></br>
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
          <section className={className[0]} id="transparent">
            <div className="section-image">
              <img
                src={require("../../../Images/Learnable Page/Photo.png")}
                alt={alt[0]}
              />
            </div>
            <div className="main-subsection">
              <h3>{header[0]}</h3>
              <p>{text[0]}</p>
              <br></br>
              <p>{text[1]}</p>
            </div>
          </section>
          <section className="main-subsection-container build-software">
            <div id="build-software-1">
              <p>For Developers</p>
              <h3>Learn to Build Software the Right Way</h3>
              <p>
                We love to build stuff. Really awesome stuff. That’s why we have
                developed a learning program that will empower you to create
                amazing software the right way.
              </p>
              <p>
                We believe in learning through experimentation. Our aim is to
                nurture and grow bright young minds from the get-go because
                that’s how our industry will thrive.
              </p>
              <button>Learn More</button>
            </div>
            <div id="build-software-2">
              <section className="item cadet">
                <h4>Program with JavaScript</h4>
              </section>
              <section className="item green">
                <h4>Version Control with Git</h4>
              </section>
              <section className="item saffron">
                <h4>Web Development with React</h4>
              </section>
              <section className="item purple">
                <h4>Building APIs with NodeJS</h4>
              </section>
              <section className="item metal">
                <h4>Managing Data with MongoDB</h4>
              </section>
              <section className="item" id="Vivid-Tangelo">
                <h4>Deploying with Heroku</h4>
              </section>
            </div>
          </section>
          <section
            className="main-subsection-container build-software"
            id="transparent"
          >
            <div id="build-software-2">
              <section className="item cadet">
                <h4>Design User Interfaces</h4>
              </section>
              <section className="item" id="Vivid-Tangelo">
                <h4>Craft User Experiences</h4>
              </section>
              <section className="item saffron">
                <h4>Apply Design Thinking</h4>
              </section>
              <section className="item metal">
                <h4>Build Information Architecture</h4>
              </section>
              <section className="item orange">
                <h4>Copy write for Projects</h4>
              </section>
              <section className="item green">
                <h4>Brand Products</h4>
              </section>
            </div>
            <div id="build-software-1">
              <p>For Developers</p>
              <h3>Design Different</h3>
              <p>
                We love to make things work perfectly. That’s why our design
                learning path exposes you to the science of user-oriented
                design.
              </p>
              <p>
                Design is at the heart of everything we do at Genesys. Right
                from the start of the program, you’ll get your hands dirty as
                you get practically involved in the world’s most modern design
                concepts. At Genesys, we’re building designers who put the users
                first.
              </p>
              <button>Learn More</button>
            </div>
          </section>
          <section className={className[1]} id="white-bg">
            <div className="section-image">
              <img
                src={require("../../../Images/Learnable Page/Photo-1.png")}
                alt={alt[0]}
              />
            </div>
            <div className="main-subsection eligible">
              <h3>{header[1]}</h3>
              <p>{text[1]}</p>
              <p>{text[2]}</p>
            </div>
          </section>
          <section className={className[0]} id="Vivid-Tangelo">
            <div className="section-image">
              <img
                src={require("../../../Images/Learnable Page/Photo-3.png")}
                alt={alt[0]}
              />
            </div>
            <div className="main-subsection">
              <h3>{header[2]}</h3>
              <p>{text[4]}</p>
            </div>
          </section>
          <section className="main-subsection-container fun" id="White-bg">
            <div className="main-subsection-desc">
              <h3>{header[3]}</h3>
              <p>{text[5]}</p>
              <p>{text[6]}</p>
            </div>
            <div className="section-image">
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 17.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 18.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 19.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 20.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 21.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 22.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 23.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 24.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 25.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 26.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 27.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 28.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 29.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 30.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 31.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning can be fun (Learnable Page)/Rectangle 32.png")}
                alt={alt[0]}
              />
            </div>
          </section>

          <section className="main-subsection-container experts">
            <div id="experts-1">
              <div>
                <div className="experts-item">
                  <img
                    src={require("../../../Images/Learn from experts (Learnable Page)/Ana 1.png")}
                    alt={alt[0]}
                  />
                  <div>
                    <h6>Nnamdi</h6>
                    <p>Managing Director</p>
                  </div>
                </div>
              </div>
              <div className="experts-item">
                <img
                  src={require("../../../Images/Learn from experts (Learnable Page)/IMG_0491-2@2x-400x359 1.png")}
                  alt={alt[0]}
                />
                <div>
                  <h6>Ositadinma</h6>
                  <p>Learnable Coordinator</p>
                </div>
              </div>
              <div className="experts-item">
                <img
                  src={require("../../../Images/Learn from experts (Learnable Page)/IMG_2087@2x-400x359 1.png")}
                  alt={alt[0]}
                />
                <div>
                  <h6>Idowu</h6>
                  <p>Scrum Proffessional</p>
                </div>
              </div>
              <div className="experts-item">
                <img
                  src={require("../../../Images/Learn from experts (Learnable Page)/IMG_4354@2x-400x359 1.png")}
                  alt={alt[0]}
                />
                <div>
                  <h6>David</h6>
                  <p>Design Lead</p>
                </div>
              </div>
              <div className="experts-item">
                <img
                  src={require("../../../Images/Learn from experts (Learnable Page)/IMG_4403@2x-400x359 1.png")}
                  alt={alt[0]}
                />
                <div>
                  <h6>Emmanuel</h6>
                  <p>Software Lead</p>
                </div>
              </div>
              <div className="experts-item">
                <img
                  src={require("../../../Images/Learn from experts (Learnable Page)/IMG_4604@2x-400x359 1.png")}
                  alt={alt[0]}
                />
                <div>
                  <h6>Ezra</h6>
                  <p>Ass. Learnable Coordinator</p>
                </div>
              </div>
            </div>
            <div id="experts-2">
              <h2>Learn from the Experts</h2>
              <p>
                As a learnable intern, you will be learning from the best
                software developers and product designers our industry has to
                offer. You will spend the first 3 months in the classroom with
                industry experts who have a wealth of experience from developing
                amazing products for various customers in our industry.
              </p>
            </div>
          </section>

          <section className="main-subsection-container fun" id="White-bg">
            <div className="main-subsection-desc">
              <h3>{header[4]}</h3>
              <p>{text[8]}</p>
            </div>
            <div className="section-image">
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 17.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 18.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 19.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 20.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 21.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 22.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 23.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 24.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 25.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 26.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 27.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 28.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 29.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 30.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 31.png")}
                alt={alt[0]}
              />
              <img
                src={require("../../../Images/Learning doesn't always have to be in (Learnable Page)/Rectangle 32.png")}
                alt={alt[0]}
              />
            </div>
          </section>

          <MainSubSection
            className={className[2]}
            header="Apply Your Knowledge"
            text={text[3]}
            src={require("../../../Images/Learnable Page/Photo-3.png")}
            alt={alt[3]}
            buttonTitle="Get Started"
          />
          <section className="main-subsection-container faq-section">
            <div id="faq">
              <h2>FAQ</h2>
              <div>{faqButtons}</div>
              <button>see all</button>
            </div>
          </section>
          <section id="transparent">
            <div className="journal-section">
              <h2>Journal</h2>
              <button>View all</button>
              <div id="journal-copy">
                <section className="journal-copy-copy">
                  <img
                    src={require("../../../Images/Journal Page (Group)/image 23-1.png")}
                    alt="expand"
                  />
                  {journalCopy}
                </section>
                <section className="journal-copy-copy">
                  <img
                    src={require("../../../Images/Journal Page (Group)/image 24-1.png")}
                    alt="expand"
                  />
                  {journalCopy}
                </section>
                <section className="journal-copy-copy">
                  <img
                    src={require("../../../Images/Journal Page (Group)/image 25.png")}
                    alt="expand"
                  />
                  {journalCopy}
                </section>
                <section className="journal-copy-copy">
                  <img
                    src={require("../../../Images/Journal Page (Group)/image 26.png")}
                    alt="expand"
                  />
                  {journalCopy}
                </section>
              </div>
            </div>
          </section>
          <section className="mentioned-in">
            <h4>Mentioned in</h4>
            <div className="mentioned-in-logos">
              <img
                src={require("../../../Images/Mentions(Learnable Page)/image 27.png")}
                alt="mentions"
              />
              <img
                src={require("../../../Images/Mentions(Learnable Page)/image 28.png")}
                alt="mentions"
              />
              <img
                src={require("../../../Images/Mentions(Learnable Page)/image 29.png")}
                alt="mentions"
              />
              <img
                src={require("../../../Images/Mentions(Learnable Page)/image 30.png")}
                alt="mentions"
              />
              <img
                src={require("../../../Images/Mentions(Learnable Page)/image 31.png")}
                alt="mentions"
              />
            </div>
          </section>
          <Subscribe />
        </main>
        <Footer />
      </div>
    );
  }
}

export default LearnableHome;
