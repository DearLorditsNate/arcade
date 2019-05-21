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

        <div id="container">
          <button id="beginGame">Begin Game</button>
          <button class="sendMissile">Send Missile</button>
          <div id="container"></div>
          <div id="something">Missiles Fired: </div>
          <div id="missileClicks">0</div>
      <div>Hits:
      <div id="hits">0</div>
            </div>
          </div>


        </div>
    
    );
  }
}
export default battlegame;