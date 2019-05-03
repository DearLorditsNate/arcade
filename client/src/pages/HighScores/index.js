import React from "react";
import Stats from "../../components/Stats";
import ScoreCard from "../../components/ScoreCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import HighestScoreCard from "../../components/HighestScoreCard";
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