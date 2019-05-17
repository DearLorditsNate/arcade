import React, { Component } from "react";
import "./style.css";

class Bboard extends Component {
    state = {
        boardSize: this.drawBoard(this.props.rows, this.props.cols, this.props.ships),
        targetCount: this.props.ships
    };
   
    //render board
    drawBoard(rows, cols, ships) {
        const canvas = document.getElementById('battleGameCanvas');
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'green';
        ctx.fillRect(10, 10, 150, 100);
        let data = this.placeShips(rows, cols, ships);
        data = this.createtargets(data, rows, cols);
        return data;
    };


}

export default Bboard;