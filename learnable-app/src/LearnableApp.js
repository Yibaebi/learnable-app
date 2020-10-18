import React from 'react';
import LandingNavBar from './Components/NavBars/LandingPage';
import LandingPage from "./Components/Pages/Landing Page/LandingPage";
import LearnableHome from "./Components/Pages/Learnable Page/Home";
import SoftwareDeveloper from "./Components/Pages/Learnable Page/SoftwareDeveloper";



function LearnableApp() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <LandingNavBar /> */}
        {/* <LandingPage /> */}
        {/* <LearnableHome /> */}
        <SoftwareDeveloper />
      </header>
    </div>
  );
}

export default LearnableApp;
