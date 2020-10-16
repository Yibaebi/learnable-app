import React from 'react';
import LandingNavBar from './Components/NavBars/LandingPage';
import LandingPage from "./Components/Pages/Landing Page/LandingPage";
import LearnableHome from "./Components/Pages/Learnable Page/Home"



function LearnableApp() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingNavBar />
        {/* <LandingPage /> */}
        <LearnableHome />
      </header>
    </div>
  );
}

export default LearnableApp;
