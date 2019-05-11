import React from 'react';
import './style.css';
import { AuthUserContext } from "../Session";
import Table from '../GameLeaderBoard/table';
import Row from "../Row";

const brickbreaker = () => (
  <AuthUserContext.Consumer>
    {authUser => authUser ? <Brickbreaker uid={authUser.uid} /> : <Brickbreaker />}
  </AuthUserContext.Consumer>
)

class Brickbreaker extends React.Component {
    componentDidMount() {

        let script = document.createElement("script");
    
        script.src = "./js/brickbreaker/brickbreaker.js";    
    
        //check if the script tags have not yet been added
        let scriptTags = document.getElementsByTagName('script');
        let scriptSources = [];
        for (var i = 0; i < scriptTags.length; i++) {
          scriptSources.push(scriptTags[i].outerHTML);
        }
    
        //turn script tage into strings so they can strictly match the scriptSources array
        let scriptstring = `<script src="./js/brickbreaker/brickbreaker.js"></script>`
    
        if (scriptSources.indexOf(scriptstring) === -1) {
          document.body.appendChild(script);
        }
      }

    render() {
        return (
          <Row>
            <div className="col-6 brick-margin-top text-white">
              <div>
                <h3 className="d-inline-block">
                  Score: <span id="brickbreakerscore">0</span>
                </h3>
                <h3 className="d-inline-block">
                  Level: <span id="brickbreakerlevel">1</span>
                </h3>
              </div>
              <canvas
                id="brickbreakercanvas"
                width="800"
                height="400"
                data-id={this.props.uid}
              />
              <h5 id="directions">
                Press the left or right arrow to begin.
              </h5>
              <a href="/brickbreaker">
                <button id="brickbreakerresetbutton">Play Again</button>
              </a>
              <Table game="brickbreaker" />
              <script src="./brickbreaker.js" />
            </div>
          </Row>
        );
    }
}

export default brickbreaker;

