import React from "react";
import "./style.css";
import { AuthUserContext } from "../Session";
import Row from "../Row";

const brickbreaker = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <Brickbreaker uid={authUser.uid} /> : <Brickbreaker />
    }
  </AuthUserContext.Consumer>
);

class Brickbreaker extends React.Component {
  componentDidMount() {
    let script = document.createElement("script");

    script.src = "./js/brickbreaker/brickbreaker.js";

    //check if the script tags have not yet been added
    let scriptTags = document.getElementsByTagName("script");
    let scriptSources = [];
    for (var i = 0; i < scriptTags.length; i++) {
      scriptSources.push(scriptTags[i].outerHTML);
    }

    //turn script tage into strings so they can strictly match the scriptSources array
    let scriptstring = `<script src="./js/brickbreaker/brickbreaker.js"></script>`;

    if (scriptSources.indexOf(scriptstring) === -1) {
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <Row>
        <div className="col-8 brick-margin-top text-white">
          <div>
            <h3 className="d-inline-block mx-5">
              Score: <span id="brickbreakerscore">0</span>
            </h3>
            <h3 className="d-inline-block mx-5">
              Level: <span id="brickbreakerlevel">1</span>
            </h3>
          </div>
          <canvas
            id="brickbreakercanvas"
            width="800"
            height="400"
            data-id={this.props.uid}
          />
          <div id="buttonsDiv">
            <button id="leftArrowButton">
              <i class="fas fa-arrow-left" />
            </button>
            <button id="rightArrowButton">
              <i class="fas fa-arrow-right" />
            </button>
          </div>
          <h5 id="directions">Press the left or right arrow to begin.</h5>
          <a href="/brickbreaker">
            <button id="brickbreakerresetbutton">RESET</button>
          </a>
          {/* <Table game="brickbreaker" /> */}
          <script src="./brickbreaker.js" />
        </div>
        {/* Save Score Modal */}
        <div
          className="modal fade"
          id="brick-save-modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content text-center">
              <div className="modal-header">
                <h5 className="modal-title" id="brick-save-modal-title" />
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
                  id="brick-save-btn"
                  type="button"
                  className="btn btn-primary"
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

export default brickbreaker;