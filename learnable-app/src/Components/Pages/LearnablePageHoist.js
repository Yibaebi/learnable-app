import React from "react";

import LandingPageHoist from "./LandingPageHoist";
import LearnableNavBar from "../../Components/NavBars/LearnablePage";
import LearnableHome from "./Learnable Page/Home"

import { BrowserRouter, Route } from "react-router-dom";

const LearnablePageHoist = () => {
  return (
    <BrowserRouter>
      <div>
          <LearnableNavBar />
          <Route exact path="/" component={LandingPageHoist} />
          <Route exact path="/Learnablehome" component={LearnableHome} />
          <Route exact path="/Learnablehome" component={LearnableHome} />
          <Route exact path="/Learnablehome" component={LearnableHome} />
          <Route exact path="/Learnablehome" component={LearnableHome} />
          <Route exact path="/Learnablehome" component={LearnableHome} />
          
      </div>
    </BrowserRouter>
  );
};

export default LearnablePageHoist;