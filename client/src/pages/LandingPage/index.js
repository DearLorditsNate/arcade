import React from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../Pages.css";
import Tetris from "../../components/Tetris";
//import Snake from "../../../../Snake";
import GameCard from "../../components/GameCard";


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
        //} else if (this.state.currentPage === "Snake") {
            //return <Snake />;
        } else if (this.state.currentPage === "Tetris") {
            return <Tetris />;
        }
    };


    render() {
        return (
            <div className="landingPage">
                <Navbar />
<GameCard/>
<Footer/>
            </div>

        )
    }
}

export default LandingPage;


