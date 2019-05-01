import React from "react";
import "../App.css";

function Navbar (props){
    return(
        <ul className="homeTab">
        <h1> WELCOME TO THE ARCADE!</h1>
        <li>
          <a href="#home" >
            Home
          </a>
        </li>
        <li className="highScoreTab">
          <a href="#highScores" onClick={() => props.handlePageChange("HighScores")} className="nav-link">
            High Scores
          </a>
          </li>
          </ul>  
    );
}
export default Navbar;