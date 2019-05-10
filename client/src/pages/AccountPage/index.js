import React from "react";
import { AuthUserContext, withAuthorization } from "../../components/Session";
import API from "../../utils/API";

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
      console.log(response);
    })
    .catch(error => console.log(error));
  };

  componentDidMount() {
    setTimeout(this.grabHighScores(this.props.uid), 1000);
  }

  render() {
    return (
      <div>
        <h1>Account Page</h1>
        <p>{this.props.uid}</p>
      </div>
    )}
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(accountPage);