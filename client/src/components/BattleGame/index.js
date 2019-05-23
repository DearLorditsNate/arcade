import React from "react";
import "./style.css";
import { AuthUserContext } from "../Session";

const battlegame = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <Battlegame uid={authUser.uid} /> : <Battlegame />
    }
  </AuthUserContext.Consumer>
);

class Battlegame extends React.Component {
  componentDidMount() {
    let script = document.createElement("script");

    script.src = "./js/battlegame/battlegame.js";

    //check if the script tags have not yet been added
    let scriptTags = document.getElementsByTagName("script");
    let scriptSources = [];
    for (var i = 0; i < scriptTags.length; i++) {
      scriptSources.push(scriptTags[i].outerHTML);
    }

    //turn script tage into strings so they can strictly match the scriptSources array
    let scriptstring = `<script src="./js/battlegame/battlegame.js"></script>`;

    if (scriptSources.indexOf(scriptstring) === -1) {
      document.body.appendChild(script);
    }
  }
  render() {
    return (
      <div>
        <canvas
          id="battleGameCanvas"
          width="450"
          height="450"
          data-id={this.props.uid}
        />
        <div id="battleGamewrapper" data-id={this.props.uid}>
          <div id="container">
            <button id="beginGame">Begin Game</button>
            <button id="sendMissile">Send Missile</button>

            {/* <div id="container"> */}
            <div id="sunken">
              BattleShips Sunk: <div id="sink">#</div>
            </div>
            <div id="missilesFired">
              Missiles Fired: <div id="fired">#</div>
            </div>
            <div id="hits">
              Hits: <div id="hit">#</div>
            </div>
            <a href="/battlegame">
              <button className="d-block m-auto" id="battleGameResetButton">
                RESET
              </button>
            </a>
          </div>
          {/* Save Score Modal */}
          <div
            className="modal fade"
            id="battlegame-save-modal"
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
                  <h5
                    className="modal-title"
                    id="battlegame-save-modal-title"
                  />
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
                    id="battlegame-save-btn"
                    type="button"
                    className="sign-in-up-btn"
                  >
                    Save Score
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
export default battlegame;
