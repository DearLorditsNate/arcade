import React from "react";
import "./style.css";
import API from "../../utils/API";
import Row from "../../components/Row";
//
class GlobalHighScores extends React.Component {
    state = {
        scores: [],
        tscores: [],
        bscores: [],
        mscores: [],
        bsscores: [],
    };
    getMineSweeperHighScores = () => {
        API.gameHighScore('minesweeper').then(res=> {
            let position = 1;
                res.data.map(x => {
                  x.position = position;
                  position++;
            this.setState({ 
                mscores: [...this.state.mscores, x ]
             });
            });
        });
      });
    });
  };

  getBrickBreakerHighScores = () => {
    API.gameHighScore("brickbreaker").then(res => {
      let position = 1;
      res.data.map(x => {
        x.position = position;
        position++;
        this.setState({
          bscores: [...this.state.bscores, x]
        });
      });
    });
  };
  getTetrisHighScores = () => {
    API.gameHighScore("tetris").then(res => {
      let position = 1;
      res.data.map(x => {
        x.position = position;
        position++;
        this.setState({
          tscores: [...this.state.tscores, x]
        });
      });
    });
  };
  getSnakeHighScores = () => {
    API.gameHighScore("snake").then(res => {
      let position = 1;
      res.data.map(x => {
        x.position = position;
        position++;
        this.setState({
          scores: [...this.state.scores, x]
        });
    }
    getBattleGameHighScores = () => {
        API.gameHighScore('battlegame').then(res => {
            let position = 1;
            res.data.map(x => {
              x.position = position;
              position++;
        this.setState({
             scores: [...this.state.bsscores, x ] 
            });
        }); 
            console.log(this.state.bsscores);
        });
    }
    componentDidMount() {
        this.getSnakeHighScores();
        this.getTetrisHighScores();
        this.getMineSweeperHighScores();
        this.getBrickBreakerHighScores();
        this.getBattleGameHighScores();
      

    }

    render() {

        return (
            <div className="highscores">
                <Row>
                    <div className="col-md-12 ">
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
                                            <th scope="row">{score.position}</th>
                                            <td>{score.uid}</td>
                                            <td>{score.score}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-12 ">
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
                                            <th scope="row">{tScore.position}</th>
                                            <td>{tScore.uid}</td>
                                            <td>{tScore.score}</td>

                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                        <div className="col-md-12">
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
                                                <th scope="row">{bScore.position}</th>
                                                <td>{bScore.uid}</td>
                                                <td>{bScore.score}</td>

                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-12">
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
                                                <th scope="row">{mScore.position}</th>
                                                <td>{mScore.uid}</td>
                                                <td>{mScore.score}</td>

                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-12">
                            <h1>Solitary Battleship</h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Score</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.bsscores.map((bsScore) => {
                                        return (
                                            <tr key={bsScore.uid}>
                                                <th scope="row">{bsScore.position}</th>
                                                <td>{bsScore.uid}</td>
                                                <td>{bsScore.score}</td>

                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </Row>
                </div>
          
        )
    };
};

  render() {
    return (
      <div className="highscores highscores-small">
        <Row>
          <div className="col-md-12 ">
            <h1>Snake</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Initials</th>
                  <th scope="col">Score </th>
                </tr>
              </thead>
              <tbody>
                {this.state.scores.map(score => {
                  return (
                    <tr key={score.uid}>
                      <th scope="row">{score.position}</th>
                      <td className="initials-col initials-col-small">
                        {score.initials}
                      </td>
                      <td>{score.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-md-12 ">
            <h1>Tetris</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Initials</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tscores.map(tScore => {
                  return (
                    <tr key={tScore.uid}>
                      <th scope="row">{tScore.position}</th>
                      <td className="initials-col initials-col-small">
                        {tScore.initials}
                      </td>
                      <td>{tScore.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-md-12">
            <h1>BrickBreaker</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Initials</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bscores.map(bScore => {
                  return (
                    <tr key={bScore.uid}>
                      <th scope="row">{bScore.position}</th>
                      <td className="initials-col initials-col-small">
                        {bScore.initials}
                      </td>
                      <td>{bScore.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-md-12">
            <h1>Minesweeper</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Initials</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mscores.map(mScore => {
                  return (
                    <tr key={mScore.uid}>
                      <th scope="row">{mScore.position}</th>
                      <td className="initials-col">
                        {mScore.initials}
                      </td>
                      <td>{mScore.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Row>
      </div>
    );
  }
}

export default GlobalHighScores;
