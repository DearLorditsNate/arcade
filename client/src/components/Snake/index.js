import React from "react";
import "./style.css";
import Table from "../GameLeaderBoard/table";
import { AuthUserContext } from "../Session";
import Row from "../Row";

const snake = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <Snake uid={authUser.uid} /> : <Snake />)}
  </AuthUserContext.Consumer>
);

class Snake extends React.Component {
  componentDidMount() {
    let script = document.createElement("script");
    let script2 = document.createElement("script");

    script.src = "./js/snake/snake.js";

    //check if the script tags have not yet been added
    let scriptTags = document.getElementsByTagName("script");
    let scriptSources = [];
    for (var i = 0; i < scriptTags.length; i++) {
      scriptSources.push(scriptTags[i].outerHTML);
    }

    //turn script tage into strings so they can strictly match the scriptSources array
    let scriptstring1 = `<script src="./js/snake/snake.js"></script>`;

    if (scriptSources.indexOf(scriptstring1) === -1) {
      document.body.appendChild(script2);
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <Row>
        <div className="col-8 snake-margin-top text-white">
          <div id="wrapper" data-id={this.props.uid}>
            <h3>
              Score:<span id="snakeScore">0</span>
            </h3>
            <canvas id="snakeCanvas" width="800" height="400" />
            <h4 id="snakeLoseMessage">You lose!</h4>
            {/* <Table game="snake" /> */}
            <a href="/snake">
              <button className="d-block m-auto" id="snakeresetbutton">
                RESET
              </button>
            </a>
          </div>
          {/* Save Score Modal */}
          <div
            className="modal fade"
            id="snake-save-modal"
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
                  <h5 className="modal-title" id="snake-save-modal-title" />
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
                    id="snake-save-btn"
                    type="button"
                    className="btn btn-primary"
                  >
                    Save Score
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    );
  }
}

export default snake;
