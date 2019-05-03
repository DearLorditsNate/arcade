import React from "react";
import Stats from "../../Stats";
import ScoreCard from "../../ScoreCard";
import HighestScoreCard from "../../HighestScoreCard";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "../Pages.css";
import AdBanner from "../../AdBanner";

class SnakeLanding extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <Stats />
                <ScoreCard />
                <HighestScoreCard />
                <AdBanner/>
                <Footer />
            </div>
        )
    }
}
export default SnakeLanding;
