import React from "react";
import './style.css'
import { AuthUserContext } from "../Session";

const battlegame = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <Battlegame uid={authUser.uid} /> : <Battlegame />)}
  </AuthUserContext.Consumer>
)
class Battlegame extends React.Component {
  componentDidMount() {

    let script = document.createElement("script");


    script.src = "./js/battlegame/battlegame.js";

    //check if the script tags have not yet been added
    let scriptTags = document.getElementsByTagName('script');
    let scriptSources = [];
    for (var i = 0; i < scriptTags.length; i++) {
      scriptSources.push(scriptTags[i].outerHTML);
    }

    //turn script tage into strings so they can strictly match the scriptSources array
    let scriptstring = `<script src="./js/battlegame/battlegame.js"></script>`

    if (scriptSources.indexOf(scriptstring) === -1) {

      document.body.appendChild(script);
    }
  }
  render() {
    return (
      <div>
        <canvas id="battleGameCanvas" width="450" height="450"></canvas>
        <div id="wrapper" data-id={this.props.uid}>
        <div id="container">
          <button id="beginGame">Begin Game</button>
          <button id="sendMissile">Send Missile</button>
            </div>
            <div id="container">
            <div id="sunken">BattleShips Sunk: <div id="sink">#</div></div>
            <div id="missilesFired">Missiles Fired: <div id="fired" >#</div></div>
            <div id="hits">Hits: <div id="hit" >#</div></div>
            <a href="/battlegame">
              <button className="d-block m-auto" id=
              "battleGameResetButton">RESET</button>
            </a>
          </div>
          </div>
          </div>
      


     

    );
  }
}
export default battlegame;