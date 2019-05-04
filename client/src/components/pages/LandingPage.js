import React from "react";
import Navbar from "../Navbar";
import "../../App";
import "./Pages.css"
import SignUpForm from "../../components/SignUpForm";
import { FirebaseContext } from "../../components/Firebase";

function LandingPage (props) {
    return (
      <div>
        <Navbar />
        <FirebaseContext.Consumer>
          {firebase => <SignUpForm firebase={firebase} />}
        </FirebaseContext.Consumer>
        <div className="leftSideDiv">
          Stats
          <p> {new Date().toLocaleDateString()}.</p>
          <p> {new Date().toLocaleTimeString()}.</p>
        </div>
        <div className="rightSideDiv">
          <p> Score Card</p>
        </div>
        <div className="nextBlock">
          <p>Upcoming Piece</p>
        </div>
      </div>
    );
};
// setInterval(Tetris, 1000);
export default LandingPage;