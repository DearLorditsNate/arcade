import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Tetris from "./components/Tetris";
import Snake from "./components/Snake";
import Navbar from "./components/Navbar";
import HighScores from "./pages/HighScores";
import { withFirebase } from "./components/Firebase";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  waitForUser = () => {
    setTimeout(this.render(), 1000)
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
        console.log(this.state.authUser.uid);
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render = () => {
    return (
      <Router>
        <div>
          <Navbar authUser={this.state.authUser} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <LandingPage {...props} isSignedIn={this.isSignedIn} />
              )}
            />
            <Route
              exact
              path="/tetris"
              render={props => (
                <Tetris {...props} authUser={this.state.authUser ? this.state.authUser.uid : undefined} />
              )}
            />
            <Route exact path="/snake" component={Snake} />
            <Route exact path="/highscores" component={HighScores}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
