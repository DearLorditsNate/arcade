import React from "react";
import Stats from "../../Stats";
import ScoreCard from "../../ScoreCard";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import HighestScoreCard from "../../HighestScoreCard";
import "./style.css";

class HighScores extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Stats />
                <ScoreCard />
                <HighestScoreCard />
                <Footer />
            </div>
        )
    }
}
export default HighScores;