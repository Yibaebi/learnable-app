import React from 'react';
import LandingNavBar from './Components/NavBars/LandingPage';
import LandingPage from "./Components/Pages/Landing Page/LandingPage";
import LearnableHome from "./Components/Pages/Learnable Page/Home";
import SoftwareDeveloper from "./Components/Pages/Learnable Page/SoftwareDeveloper";
import ProductDesigner from "./Components/Pages/Learnable Page/ProductDesigner";
import Apply from "./Components/Pages/Learnable Page/Apply"



function LearnableApp() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <LandingNavBar /> */}
        {/* <LandingPage /> */}
        {/* <LearnableHome /> */}
        {/* <SoftwareDeveloper /> */}
        {/* <ProductDesigner /> */}
        <Apply />
      </header>
    </div>
  );
}

export default LearnableApp;
