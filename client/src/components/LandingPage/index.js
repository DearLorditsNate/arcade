import React from "react";
import Navbar from "../Navbar";
import GameCard from "../GameCard";
//import SnakeLanding from "../SnakeLanding";

class LandingPage extends React.Component {

    render() {
        return (
            <div className="landingPage">
                <Navbar />
                <GameCard />
            </div>
        )
    }
}

export default LandingPage;


