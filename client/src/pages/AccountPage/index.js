import React from "react";
import { AuthUserContext, withAuthorization } from "../../components/Session";
import API from "../../utils/API";
import "./style.css";
import Row from "../../components/Row";

const accountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => <AccountPage uid={authUser.uid} />}
  </AuthUserContext.Consumer>
);

class AccountPage extends React.Component {
  state = {
    scores: [],
    tscores: [],
    bscores: [],
    mscores: [],
    bsscores: [],
  };

  getMineSweeperHighScores = uid => {
    API.userHighScores(uid, "minesweeper").then(response => {
        let position = 1;
        response.data.map(x => {
          x.position = position;
          position++;
          this.setState({
            mscores: [...this.state.mscores, x]
          });
        });
    });
  };

  getBrickBreakerHighScores = uid => {
    API.userHighScores(uid, "brickbreaker").then(response => {
      let position = 1;
      response.data.map(x => {
        x.position = position;
        position++;
        this.setState({
          bscores: [...this.state.bscores, x]
        });
      });
    });
  };

  getTetrisHighScores = uid => {
    API.userHighScores(uid, "tetris").then(response => {
      let position = 1;
      response.data.map(x => {
        x.position = position;
        position++;
        this.setState({
          tscores: [...this.state.tscores, x]
        });
      });
    });
  };

  getSnakeHighScores = uid => {
    API.userHighScores(uid, "snake").then(response => {
      let position = 1;
      response.data.map(x => {
        x.position = position;
        position++;
        this.setState({
          scores: [...this.state.scores, x]
        });
      });
    });
  };

  getBattleshipHighScores = uid => {
    API.userHighScores(uid, "battleship").then(response => {
      let position = 1;
      response.data.map(x => {
        x.position = position;
        position++;
        this.setState({
          scores: [...this.state.scores, x]
        });
      });
    });
  };

  componentDidMount() {
    this.getMineSweeperHighScores(this.props.uid);
    this.getBrickBreakerHighScores(this.props.uid);
    this.getTetrisHighScores(this.props.uid);
    this.getSnakeHighScores(this.props.uid);
    this.getBattleshipHighScores(this.props.uid);
  }

  render() {
    return (
      <div className="highscores highscores-small">
        <Row>
          <div className="col-md-12">
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
          <div className="col-md-12">
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
          <div className="col-md-12">
            <h1>Solitary Battleship</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">UserID</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bsscores.map(BsScore => {
                  return (
                    <tr key={BsScore.uid}>
                      <th scope="row">{BsScore.position}</th>
                      <td>{BsScore.uid}</td>
                      <td>{BsScore.score}</td>
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


const condition = authUser => !!authUser;

export default withAuthorization(condition)(accountPage);