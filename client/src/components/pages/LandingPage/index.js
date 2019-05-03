import React from "react";
import AdBanner from "../../AdBanner"
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "../Pages.css";
import Tetris from "../../Tetris";
import Snake from "../SnakeLanding";
import GameCard from "../../GameCard";
import SnakeLanding from "../SnakeLanding";

class LandingPage extends React.Component {
    state = {
        currentPage: "Snake"
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <GameCard handleStateChange = {this.handlePageChange} />;
        } else if (this.state.currentPage === "Snake") {
            return <Snake />;
        } else if (this.state.currentPage === "Tetris") {
            return <Tetris />;
        }
    };


    render() {
        return (
            <div className="landingPage">
                <Navbar />
<GameCard/>
            </div>

        )
    }
}

export default LandingPage;


