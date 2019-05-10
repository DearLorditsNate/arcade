import React from "react";
import { AuthUserContext, withAuthorization } from "../../components/Session";
import API from "../../utils/API";
import userHighScores from "../../components/UserHighScores";
import UserHighScores from "../../components/UserHighScores";
// import Table from "../../components/GameLeaderBoard/table";

const accountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => <AccountPage uid={authUser.uid} />}
  </AuthUserContext.Consumer>
);

class AccountPage extends React.Component {
  state = {
    highScores: []
  }

  grabHighScores = uid => {
    this.setState({highScores: []});
    API.userHighScores(uid)
    .then(response => {
      let position = 1;
      response.data.map(x => {
        x.position = position;
        position++;
        this.setState({
          highScores: [...this.state.highScores, x]
        });
      });
      console.log(response);
    })
    .catch(error => console.log(error));
  };

  componentDidMount() {
    this.grabHighScores(this.props.uid);
  }

  render() {
    return (
      <div>
        <h1>Account Page</h1>
        <p>{this.props.uid}</p>
        <UserHighScores scores={this.state.highScores} />

        {/* <h3>Snake</h3>
        <Table game="snake" />
        <h3>Tetris</h3>
        <Table game="tetris" /> */}
      </div>
    );}
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(accountPage);