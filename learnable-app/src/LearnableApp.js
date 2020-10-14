import React from 'react';
import LandingNavBar from './Components/NavBars/LandingPage';
import LearnableNavBar from './Components/NavBars/LearnablePage';
import LearnablePageFooter from './Components/LearnablePageFooter/LearnablePageFooter';



function LearnableApp() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingNavBar />
        <LearnableNavBar />
        <LearnablePageFooter />
      </header>
    </div>
  );
}

export default LearnableApp;
