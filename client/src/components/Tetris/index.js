import React, { Component } from "react";
import "./style.css";
import Table from '../GameLeaderBoard/table'
import { AuthUserContext } from "../Session";
import Row from "../Row";

const tetris = () => (
  <AuthUserContext.Consumer>
      {authUser => authUser ? <Tetris uid={authUser.uid} /> : <Tetris /> }
  </AuthUserContext.Consumer>
);

class Tetris extends Component {

  state = {
    tetrisHighScore: []
  }

  componentDidMount() {

    let script = document.createElement("script");
    let script2 = document.createElement("script");

    script.src = "./js/tetris/tetris.js";
    script2.src = "./js/tetris/tetrominos.js";


    //check if the script tags have not yet been added
    let scriptTags = document.getElementsByTagName('script');
    let scriptSources = [];
    for (var i = 0; i < scriptTags.length; i++) {
      scriptSources.push(scriptTags[i].outerHTML);
    }

    //turn script tage into strings so they can strictly match the scriptSources array
    let scriptstring1 = `<script src="./js/tetris/tetris.js"></script>`
    let scriptstring2 = `<script src="./js/tetris/tetrominos.js"></script>`

    if (scriptSources.indexOf(scriptstring1) === -1 && scriptSources.indexOf(scriptstring2) === -1) {
      document.body.appendChild(script2);
      document.body.appendChild(script);
    }

  }

  render() {
    return (
      <Row>
        <div className="col-8 tetris-margin-top text-white">
          <p id="lose-message">you lose!</p>
          <div id="wrapper" data-id={this.props.uid}>
            <canvas id="tetris" width="300" height="600" />
            <p>Next Piece:</p>
            <canvas id="nextPiece" width="180" height="150" />
            <h4 className="bg-info w-50">
              Score: <span id="score">0</span>
            </h4>
          </div>
          {/* <Table game="tetris" /> */}
          <a href="/tetris">
            <button id="tetrisresetbutton">RESET</button>
          </a>
        </div>
      </Row>
    );
  }
}

export default tetris;


