import React from "react";
import "./style.css";
import API from "../../utils/API";

class GlobalHighScores extends React.Component {
    state = {
        scores: [],
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
        console.log('hi');

    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-md-5 highscores">
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
                    <div className="col-md-5 highscores">
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>

                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>

                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 highscores">
                        <h1>Minesweeper</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    };
};


export default GlobalHighScores;


