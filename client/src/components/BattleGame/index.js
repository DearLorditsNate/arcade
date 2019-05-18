import React from 'react';
import './style.css'
import Bboard from "./board";
import Ships from "./ships";
import "./style.css";


import { AuthUserContext } from "../Session";


const battlegame = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <Battlegame uid={authUser.uid} /> : <Battlegame />)}
  </AuthUserContext.Consumer>
);

class Battlegame extends React.Component {
  state = {
    rows:8,
    cols:8,
    ships : {
      "carrier" : {
          "length": 5
      },
      "battleship" : {
          "length" :4
      },
      "tanker" : {
          "length": 3
      },
      "tugboat": {
          "length" :2
      },
      "sub" : {
          "length" : 5
      }
  }
 
  };
  render() {
   

    return (
     
        <div className="col-8 battleGame-margin-top text-white">
          
            <h3>
              Score:<span id="battleGameScore">0</span>
            </h3>
            <canvas id="battleGameCanvas" width="450" height="450" />
            <Bboard/>
          
            <a href="/battlegame">
              <button className="d-block m-auto" id=
              "battleGameResetButton">RESET</button>
            </a>
          </div>
        
    
    );
  }
}

export default battlegame;