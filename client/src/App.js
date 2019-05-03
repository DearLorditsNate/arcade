import React from 'react';

import "./App.css";
// import LandingPage from "./components/pages/LandingPage";
import Footer from "./components/Footer";
import Tetris from "./components/Tetris";
import SignUpForm from "./components/SignUpForm";

import { FirebaseContext } from "./components/Firebase";



function App() {
  return (
    <div>
      <FirebaseContext.Consumer>
        {firebase => <SignUpForm firebase={firebase} />}
      </FirebaseContext.Consumer>
      <Tetris />
      <Footer />
  
    </div>
  );
}

export default App;
