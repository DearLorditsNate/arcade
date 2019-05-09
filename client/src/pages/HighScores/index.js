import React from "react";
// import Stats from "../../components/Stats";
// import ScoreCard from "../../components/ScoreCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import GlobalHighScores from "../../components/GlobalHighScores";
// import HighestScoreCard from "../../components/HighestScoreCard";
import "./style.css";

class HighScores extends React.Component {
    render() {
        return (
            <div>
                <GlobalHighScores/>
            </div>
        )
    }
}
export default HighScores;