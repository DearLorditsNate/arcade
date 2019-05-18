import React, { Component } from "react";
import Cell from './Cell';
// import Score from './Score';
import API from "../../utils/API";
import ms from 'pretty-ms';
import "./style.css";


export default class Board extends Component {
    state = {
        boardData: this.initBoardData(this.props.rows, this.props.cols, this.props.mines),
        mineCount: this.props.mines,
        time: 0,
        isOn: false,
        start: 0,
        uid: this.props.uid
    };
    startTimer() {
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
    }
    stopTimer() {
        this.setState({ isOn: false })
        clearInterval(this.timer); 
        // console.log(this.state.time);
        // const score = this.state.time;

    }
    // resetTimer() {
    //     this.setState({ time: 0, isOn: false })
    // }

    // renders inital board data 
    initBoardData(rows, cols, mines) {
        let data = this.createEmptyCells(rows, cols);
        data = this.setMines(data, rows, cols, mines);
        data = this.countNeighbors(data, rows, cols);
        return data;
    };

    // create empty cells
    createEmptyCells(rows, cols) {
        let data = [];
        for (var i = 0; i < rows; i++) {
            data.push([]);
            // console.log(data);
            for (var j = 0; j < cols; j++) {
                data[i][j] = {
                    x: i,
                    y: j,
                    isMine: false,
                    isFlagged: false,
                    neighbor: 0,
                    isEmpty: false,
                    isRevealed: false
                }
            }
        }
        console.log(data);
        return data;
    };

    // set mines into random cells
    setMines(data, rows, cols, mines) {
        let minesPlanted = 0;
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                if (Math.random() >= 0.85) {
                    if (minesPlanted < mines) {
                        data[i][j].isMine = true;
                        minesPlanted++;
                        // need to figure out how to make the mines keep planting if 10 has not been reached.
                    }
                }
            }
        }
        console.log(minesPlanted);
        // return minesPlanted;
        return data;
    };

    // count the mines around the empty cells
    countNeighbors(data, rows, cols) {
        // let count = 0;
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                if (data[i][j].isMine === false) {
                    let count = 0;
                    for (let dx = -1; dx <= 1; dx++) {
                        for (let dy = -1; dy <= 1; dy++) {
                            const nx = i + dx;
                            const ny = j + dy;
                            if (nx >= rows || ny >= cols || ny < 0 || nx < 0) continue;
                            const cell = data[nx][ny];
                            if (cell.isMine === true) {
                                count++;

                            };
                            data[i][j].neighbor = count;
                            // console.log(data[i][j]);
                        }
                    }
                    if (data[i][j].neighbor === 0) {
                        data[i][j].isEmpty = true;
                        // console.log(data[i][j]);
                    }
                }
            }
        }
        return data;
    };

    revealBoard() {
        let data = this.state.boardData;
        console.log(data);
        data.map((rows) => {
            rows.map((cols) => {
                cols.isRevealed = true;
            });
        });
        this.setState({
            boardData: data
        });
    }
    revealEmptyCells(x, y, data) {
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                const nx = x + dx;
                const ny = y + dy;
                if (ny < 0 || nx < 0 || nx >= 10 || ny >= 10) continue;
                const cell = data[nx][ny];
                if (!cell.isFlagged && !cell.isRevealed && (cell.isEmpty || !cell.isMine)) {
                    cell.isRevealed = true;
                    if (cell.isEmpty) {
                        this.revealEmptyCells(nx, ny, data);
                    }
                }
            }
        }
        return data;
    }

    mineArray(data) {
        let mineArray = [];

        data.map((rowdata) => {
            rowdata.map((cols) => {
                if (cols.isMine) {
                    mineArray.push(cols);
                }
            })
        });
        return mineArray;
    }

    flagArray(data) {
        let flagArray = [];

        data.map((rowdata) => {
            rowdata.map((cols) => {
                if (cols.isMine) {
                    flagArray.push(cols);
                }
            })
        });
        return flagArray;
    }
    // if clicked, then cell is revealed -- either empty, a number or a mine -- if player clicks on mine, then Game Over
    handleClick(event, x, y) {
        event.preventDefault();
        // data[x][y].isRevealed = true;
        this.startTimer();
        console.log(this.state.boardData[x][y]);
        let data = this.state.boardData;
        if (data.isRevealed || data.isFlagged) {
            return null;
        }
        if (data[x][y].isMine) {
            this.revealBoard();
            console.log(this);
            this.stopTimer();
            alert("you lose");
            
            
        }
        // data[x][y].isFlagged = false;
        else if (data[x][y].isEmpty) {
            data[x][y].isRevealed = true;
            data = this.revealEmptyCells(x, y, data);
        }
        data[x][y].isRevealed = true;
        this.setState({
            boardData: data,
            isOn: true
        });
        

    };

    // right click flags the cell; if all mines flagged, player wins
    handleRightClick(event, x, y) {
        event.preventDefault();
        const data = this.state.boardData;
        let mines = this.state.mineCount;
        console.log(data[x][y]);

        if (data[x][y].isRevealed === true) {
            return
        };
        if (data[x][y].isFlagged) {
            data[x][y].isFlagged = false;
            mines++;
        }
        else {
            data[x][y].isFlagged = true;
            mines--;
        }

        if (mines === 0) {
            const mineArray = this.mineArray(data);
            const FlagArray = this.flagArray(data);
            if (JSON.stringify(mineArray) === JSON.stringify(FlagArray)) {
                this.setState({ mineCount: 0, isOn: false });
                this.revealBoard();
                this.stopTimer();
                alert("You Win");
    
                const score = (this.state.time/1000);
                console.log(score);
                // console.log(score);
                // console.log(this.props.uid);
                // console.log(Number.isInteger(score));
                const uid = this.props.uid;
                // console.log(score, uid);
                API.postMineSweeper(score, uid).then( response => {
                    console.log(response);
                })

            }
        }
        this.setState({
            boardData: data,
            mineCount: mines
        });
    };

    renderBoard = (rows, cols) => {
        return (
            <div className="board">
                {rows.map((rowsdata) => {
                    return rowsdata.map((cols) => {
                        return (
                            <Cell
                                key={cols.x + cols.y}
                                onClick={(event) => this.handleClick(event, cols.x, cols.y)}
                                cMenu={(event) => this.handleRightClick(event, cols.x, cols.y)}
                                value={cols} />
                        )
                    })

                })}
                <div className="container timer">
                    <div>Time: {ms(this.state.time, { keepDecimalsOnWholeSeconds: true })}</div>
                    <div>Mines Remaining: {this.state.mineCount}</div>
                </div>
            </div>

        );
    }
    render() {
        return (
            <div>
                {this.renderBoard(this.state.boardData)}
            </div>
        )
    }
}
