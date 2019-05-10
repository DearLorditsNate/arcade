import React from 'react';
import './style.css'
import API from '../../utils/API'
import Table from '../GameLeaderBoard/table';

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
        <div id='wrapper' data-id={this.props.authUser}>
          <canvas id='snakeCanvas' width='800' height='400'></canvas>
          <Table game='snake'/>
        </div>
      </div>
    )
  }
}

export default Snake;
