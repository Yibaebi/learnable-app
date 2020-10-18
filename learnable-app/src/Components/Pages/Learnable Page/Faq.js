import React from "react";
import "./Faq.css";
import LearnableNavBar from "../../NavBars/LearnablePage";
import Subscribe from "../../LearnablePage-Subscribe/Subscribe";
import Footer from "../../Footer/Footer";

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        {
          headerText: "Can you customize your courses?",
          text: "Lorem ipsum...",
          id: 5,
          panel: "panel",
        },
        {
          headerText: "Can you customize your courses?",
          text: "Lorem ipsum...",
          id: 5,
          panel: "panel",
        },
        {
          headerText: "Can you customize your courses?",
          text: "Lorem ipsum...",
          id: 5,
          panel: "panel",
        },
        {
          headerText: "Can you customize your courses?",
          text: "Lorem ipsum...",
          id: 5,
          panel: "panel",
        },
        {
          headerText: "Can you customize your courses?",
          text: "Lorem ipsum...",
          id: 5,
          panel: "panel",
        },
        {
          headerText: "Can you customize your courses?",
          text: "Lorem ipsum...",
          id: 5,
          panel: "panel",
        },
        {
          headerText: "Can you customize your courses?",
          text: "Lorem ipsum...",
          id: 5,
          panel: "panel",
        },
        {
          headerText: "Can you customize your courses?",
          text: "Lorem ipsum...",
          id: 5,
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
  render() {
    const { faq } = this.state;

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
    return (
      <div>
        <header>
          <LearnableNavBar />
        </header>
        <main className="faq-main">
          <section className="faq-main-container">
            <section className="main-subsection-container faq-section">
              <div id="faq">
                <div id="faq-header">
                  <h2>FAQ</h2>
                  <img
                    src={require("../../../Images/FAQ (First Image).png")}
                    alt="expand"
                  />
                </div>
                <div>{faqButtons}</div>
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

export default Faq;
