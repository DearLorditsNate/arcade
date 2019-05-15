import React, { Component } from 'react';
import Board from "./Board";
// import Score from "./Score";
import { AuthUserContext } from "../Session";


const minesweeper = () => (
    <AuthUserContext.Consumer>
      {authUser => authUser ? <Minesweeper uid={authUser.uid} /> : <Minesweeper />}
    </AuthUserContext.Consumer>
  )

class Minesweeper extends Component {
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
        {/* <Score /> */}
      </div>
    );
  }

}

export default minesweeper;
