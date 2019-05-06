import React from "react";
import GameCard from "../../components/GameCard";
import SignUpForm from "../../components/SignUpForm";
import SignInForm from "../../components/SignInForm";
import { FirebaseContext } from "../../components/Firebase";

class LandingPage extends React.Component {
    render() {
        return (
          <div className="landingPage">
            <FirebaseContext.Consumer>
              {firebase => <SignUpForm firebase={firebase} />}
            </FirebaseContext.Consumer>
            <GameCard />
          </div>
        );
    }
}

export default LandingPage;


