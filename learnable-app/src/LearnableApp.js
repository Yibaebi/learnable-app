import React from 'react';
import LandingNavBar from './Components/NavBars/LandingPage';
import LearnableNavBar from './Components/NavBars/LearnablePage';
import Footer from './Components/Footer/Footer.js';
import Subscribe from './Components/LearnablePage-Subscribe/Subscribe';
import LandingPage from "./Components/Pages/Landing Page/LandingPage";



function LearnableApp() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <LandingNavBar />
        <LearnableNavBar /> */}
        {/* <Subscribe />
        <Footer /> */}
        <LandingPage />
      </header>
    </div>
  );
}

export default LearnableApp;
