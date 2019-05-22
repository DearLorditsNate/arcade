import React, { Component } from "react";
import "./style.css";
import { AuthUserContext } from "../Session";
import Row from "../Row";

const tetris = () => (
  <AuthUserContext.Consumer>
    {authUser => authUser ? <Tetris uid={authUser.uid} /> : <Tetris />}
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
          <h4 className="w-100">
            Score: <span id="score">0</span>
          </h4>
          <div className="next-piece">
            <p>Next Piece:</p>
            <canvas id="nextPiece" width="180" height="150" />
          </div>
          <div id="tetriswrapper" data-id={this.props.uid}>
            <canvas id="tetris" width="300" height="600" />
            <div id="tetrisButtons">
              <button id="upArrowButton">
                <i class="fas fa-arrow-up" />
              </button>
              <button id="leftArrowButton">
                <i class="fas fa-arrow-left" />
              </button>
              <button id="rightArrowButton">
                <i class="fas fa-arrow-right" />
              </button>
              <button id="downArrowButton">
                <i class="fas fa-arrow-down" />
              </button>
            </div>
          </div>
          <a href="/tetris">
            <button id="tetrisresetbutton">RESET</button>
          </a>
        </div>
        {/* Save Score Modal */}
        <div
          className="modal fade"
          id="tetris-save-modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
          >
            <div className="modal-content text-center">
              <div className="modal-header">
                <h5 className="modal-title" id="tetris-save-modal-title" />
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h5 className="modal-title">Enter Your Initials</h5>
                <br />
                <form>
                  <div class="row justify-content-center">
                    <div class="col-2">
                      <input
                        id="letter-1"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="A"
                        maxlength="1"
                      />
                    </div>
                    <div class="col-2">
                      <input
                        id="letter-2"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="B"
                        maxlength="1"
                      />
                    </div>
                    <div class="col-2">
                      <input
                        id="letter-3"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="C"
                        maxlength="1"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  id="tetris-save-btn"
                  type="button"
                  className="sign-in-up-btn"
                >
                  Save Score
                </button>
              </div>
            </div>
          </div>
        </div>
      </Row>
    );
  }
}

export default tetris;


