import React from "react";
import Navbar from "../Navbar";
import GameCard from "../GameCard";

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


