import React from "react";
import Stats from "../../components/Stats";
import ScoreCard from "../../components/ScoreCard";
import HighestScoreCard from "../../components/HighestScoreCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../Pages.css";
import AdBanner from "../../components/AdBanner";

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
