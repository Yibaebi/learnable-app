import React from 'react';
import LandingNavBar from './Components/NavBars/LandingPage';
import LandingPage from "./Components/Pages/Landing Page/LandingPage";



function LearnableApp() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingNavBar />
        <LandingPage />
      </header>
    </div>
  );
}

export default LearnableApp;
