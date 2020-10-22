import React from "react";

import LandingNavBar from "./Components/NavBars/LandingPage";
import LearnableHome from "./Components/Pages/Learnable Page/Home";
import SoftwareDeveloper from "./Components/Pages/Learnable Page/SoftwareDeveloper";
import ProductDesigner from "./Components/Pages/Learnable Page/ProductDesigner";
import Apply from "./Components/Pages/Learnable Page/Apply";
import Journal from "./Components/Pages/Learnable Page/Journal";
import Faq from "./Components/Pages/Learnable Page/Faq";
import LandingPage from "./Components/Pages/Landing Page/LandingPage";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function LearnableApp() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <LandingNavBar />
        </header>
        <div>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/Learnablehome" component={LearnableHome} />
              <Route path="/Software" component={SoftwareDeveloper} />
              <Route path="/Product" component={ProductDesigner} />
              <Route path="/Apply" component={Apply} />
              <Route path="/Journal" component={Journal} />
              <Route path="/Faq" component={Faq} />
            </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default LearnableApp;
