import React, { Component } from 'react';
import Board from "./Board";



class App extends Component {
  state = {
    rows: 10,
    cols: 10,
    mines: 10
  };
  
  render() {
    const { rows, cols, mines } = this.state;
    return (
      <div className="game">
      <h1>Minesweeper</h1>
        <Board rows = {rows} cols={cols} mines={mines} />
      </div>
    );
  }

}

export default App;
