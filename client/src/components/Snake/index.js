import React from 'react';
import './style.css'
import Table from '../GameLeaderBoard/table';
import { AuthUserContext } from "../Session";

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
      <div>
        <h1>Snake!</h1>
        <div id="wrapper" data-id={this.props.uid}>
          <canvas id="snakeCanvas" width="800" height="400" />
          <Table game="snake" />
          <h3>
            Score:<span id="snakeScore">0</span>
          </h3>
          <a href="/snake">
            <button>Play again</button>
          </a>
        </div>
      </div>
    );
  }
}

export default snake;
