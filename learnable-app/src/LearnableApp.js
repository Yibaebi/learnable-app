import React from 'react';
import LandingNavBar from './Components/NavBars/LandingPage';
import LearnableNavBar from './Components/NavBars/LearnablePage';


function LearnableApp() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingNavBar />
      </header>
    </div>
  );
}

export default LearnableApp;
