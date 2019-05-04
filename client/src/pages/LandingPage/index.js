import React from "react";
import Navbar from "../../components/Navbar";
import Tetris from "../../components/Tetris";
import Snake from "../../components/Snake";
import GameCard from "../../components/GameCard";
//import SnakeLanding from "../SnakeLanding";
import SignUpForm from "../../components/SignUpForm";
import { FirebaseContext } from "../../components/Firebase";

class LandingPage extends React.Component {
 
    render() {
        return (
          <div className="landingPage">
            <Navbar />
            <FirebaseContext.Consumer>
              {firebase => <SignUpForm firebase={firebase} />}
            </FirebaseContext.Consumer>
            {this.renderPage()}
          </div>
        );
    }
}

export default LandingPage;


