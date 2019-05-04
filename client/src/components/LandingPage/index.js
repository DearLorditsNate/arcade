import React from "react";
import Navbar from "../Navbar";
import Tetris from "../Tetris";
import Snake from "../Snake";
import GameCard from "../GameCard";
//import SnakeLanding from "../SnakeLanding";

class LandingPage extends React.Component {
    state = {
        currentPage: "Home"
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <GameCard handleStateChange = {this.handlePageChange}/>;
        } else if (this.state.currentPage === "Snake") {
           return <Snake />;
        } else if (this.state.currentPage === "Tetris") {
           return <Tetris/>;
        }
    };


    render() {
        return (
            <div className="landingPage">
                <Navbar />
                {this.renderPage()}
            </div>

        )
    }
}

export default LandingPage;


