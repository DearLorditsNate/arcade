import React, { Component } from "react";
import "./style.css";

class Tetris extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    const script2 = document.createElement("script");

    script.src = "./js/tetris/tetris.js";

    script2.src = "./js/tetris/tetrominos.js";

    document.body.appendChild(script2);
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <p id="lose-message">you lose!</p>
        <div id="wrapper">
          <canvas id="tetris" width="300" height="600" />
          <p>Next Piece:</p>
          <canvas id="nextPiece" width="180" height="150" />
          <h4>
            Score: <span id="score">0</span>
          </h4>
        </div>
      </div>
    );
  }
}

export default Tetris;


