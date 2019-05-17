import React, {Component} from "react";
import "./style.css";
 
class Bboard extends Component {
    state = {
        boardSize : this.drawBoard(this.props.rows, this.props.cols, this.props.ships),
        targetCount: this.props.ships
    };
    //render board
    drawBoard(rows,cols,ships) {
        let data = this.placeShips(data, rows,cols,ships);
        data = this.createEmptyCells(rows,cols);
    }


}

export default Bboard;