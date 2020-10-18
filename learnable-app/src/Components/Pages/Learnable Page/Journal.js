import React from "react";
import "./Journal.css";
import LearnableNavBar from "../../NavBars/LearnablePage";
import Subscribe from "../../LearnablePage-Subscribe/Subscribe";
import Footer from "../../Footer/Footer";

class Journal extends React.Component {
  render() {
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
          <LearnableNavBar />
        </header>
        <main className="software-main">
          <section className="journal-main-container">
            <section id="journal-intro">
              <div>
                <h1>Journal</h1>
                <button>Categories</button>
              </div>
            </section>
            <section id="hero-journal">
              <div className="hero-journal-item">
                <img
                  src={require("../../../Images/Journal Page (First Image).png")}
                  alt="profile"
                />
              </div>
              <div className="hero-journal-text">
                <div id="hero-journal-button">
                  <button>Inspiration</button>
                </div>
                <div id="hero-journal-desc">
                  <h3>
                    Learn Design Thinking like a Pro and Build Projects that
                    People will care about
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                    sapien arcu vitae orci at molestie. Pharetra quisque donec
                    accumsan rhoncus risus. Urna magna turpis duis imperdiet
                    elit, et, hendrerit viverra risus. Vulputate euismod commodo
                    donec tincidunt et, aliquam. Eget scelerisque netus habitant
                    dui porttitor cursus. Ipsum sem ut tortor ac ullamcorper.
                    Lacus.
                  </p>
                  <div id="hero-journal-author">
                    <img
                      src={require("../../../Images/Journal (Learnable Page)/Rectangle 44.png")}
                      alt="author"
                    />
                    <p>David Mong, Apr 9, 2020</p>
                  </div>
                </div>
              </div>
            </section>
            <section id="transparent">
              <div className="journal-section">
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
          </section>
          <Subscribe />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Journal;
