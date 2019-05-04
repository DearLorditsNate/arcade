import React from 'react';

import "./App.css";
import LandingPage from "./components/pages/LandingPage";
import Footer from "./components/Footer";
import Tetris from "./components/Tetris";



function App() {
  return (
    <div>
      <LandingPage />
      <Tetris />
      <Footer />
    </div>
  );
}

export default App;
