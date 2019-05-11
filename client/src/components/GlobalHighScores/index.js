import React from "react";
import "./style.css";
import API from "../../utils/API";
//
class GlobalHighScores extends React.Component {
    state = {
        scores: [],
        tscores: [],
        bscores: [],
        mscores: [],
    }
    getMineSweeperHighScores = () => {
        API.gameHighScore('minesweeper').then((res) => {
            this.setState({ mscores: res.data });
            console.log(res.data);
            console.log(this.state.mscores);
        });
    }
    getBrickBreakerHighScores = () => {
        API.gameHighScore('brickbreaker').then((res) => {
            this.setState({ bscores: res.data });
            console.log(res.data);
            console.log(this.state.bscores);
        });
    }
    getTetrisHighScores = () => {
        API.gameHighScore('tetris').then((res) => {
            this.setState({ tscores: res.data });
            console.log(res.data);
            console.log(this.state.tscores);
        });
    }
    getSnakeHighScores = () => {
        API.gameHighScore('snake').then((res) => {
            this.setState({ scores: res.data });
            console.log(res.data);
            console.log(this.state.scores);
        });
    }

    componentDidMount() {
        this.getSnakeHighScores();
        this.getTetrisHighScores();
        this.getMineSweeperHighScores();
        this.getBrickBreakerHighScores();
        console.log('hi');

    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 highscores">
                        <h1>Snake</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">UserId</th>
                                    <th scope="col">Score  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.scores.map((score) => {
                                    return (
                                        <tr key={score.uid}>
                                            <th scope="row">1</th>
                                            <td>{score.uid}</td>
                                            <td>{score.score}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-12 highscores">
                        <h1>Tetris</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">UserID</th>
                                    <th scope="col">Score</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.tscores.map((tScore) => {
                                    return (
                                        <tr key={tScore.uid}>
                                            <th scope="row">1</th>
                                            <td>{tScore.uid}</td>
                                            <td>{tScore.score}</td>

                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                        <div className="col-md-12 highscores">
                            <h1>BrickBreaker</h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Score</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.bscores.map((bScore) => {
                                        return (
                                            <tr key={bScore.uid}>
                                                <th scope="row">1</th>
                                                <td>{bScore.uid}</td>
                                                <td>{bScore.score}</td>

                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-12 highscores">
                            <h1>Minesweeper</h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Score</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.mscores.map((mScore) => {
                                        return (
                                            <tr key={mScore.uid}>
                                                <th scope="row">1</th>
                                                <td>{mScore.uid}</td>
                                                <td>{mScore.score}</td>

                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
          
        )
    };
};


export default GlobalHighScores;


