import React from 'react';
import './style.css'
import Table from '../GameLeaderBoard/table';
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
    let scriptTags = document.getElementsByTagName('script');
    let scriptSources = [];
    for (var i = 0; i < scriptTags.length; i++) {
      scriptSources.push(scriptTags[i].outerHTML);
    }

    //turn script tage into strings so they can strictly match the scriptSources array
    let scriptstring1 = `<script src="./js/snake/snake.js"></script>`

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
              <button className="d-block m-auto" id=
              "snakeresetbutton">RESET</button>
            </a>
          </div>
        </div>
      </Row>
    );
  }
}

export default snake;
