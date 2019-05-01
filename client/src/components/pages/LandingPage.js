import React from "react";
import Navbar from "../Navbar";
import "../../App";
import "./Pages.css"

function LandingPage (props) {
    return (
        <div>
            <Navbar></Navbar>    
            
            <div className="leftSideDiv">
            Stats
            <p> {new Date ().toLocaleDateString()}.</p>
            <p> {new Date ().toLocaleTimeString()}.</p>
            </div>
            <div className="rightSideDiv">
            <p> Score Card</p>
            </div>
            <div className = "nextBlock">
            <p>Upcoming Piece</p>
            </div>
        </div>
    )
};
// setInterval(Tetris, 1000);
export default LandingPage;