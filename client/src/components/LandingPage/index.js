import React from "react";
import Navbar from "../Navbar";
import GameCard from "../GameCard";
import AdBanner from "../AdBanner";

class LandingPage extends React.Component {

    render() {
        return (
            <div className="landingPage">
                <Navbar />
                <GameCard />
                <AdBanner />
            </div>
        )
    }
}

export default LandingPage;


