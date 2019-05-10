import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Tetris from "./components/Tetris";
import Snake from "./components/Snake";
import Brickbreaker from './components/Brickbreaker';
import Navbar from "./components/Navbar";
import HighScores from "./pages/HighScores";
import AccountPage from "./pages/AccountPage";
import { withAuthentication } from "./components/Session";
// import { AuthUserContext } from "./components/Session";
// import { withFirebase } from "./components/Firebase";



class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     authUser: null
  //   };
  // }

  waitForUser = () => {
    setTimeout(this.render(), 1000)
  }

  // componentDidMount() {
  //   this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
  //     authUser
  //       ? this.setState({ authUser })
  //       : this.setState({ authUser: null });
  //       console.log(this.state.authUser.uid);
  //   });
  // }

  // componentWillUnmount() {
  //   this.listener();
  // }

  render = () => {
    return (
      <Router>
        <div>
          <Navbar />
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
                <Tetris
                  {...props}
                  authUser={
                    this.state.authUser
                      ? this.state.authUser.uid
                      : undefined
                  }
                />
              )}
            />
            <Route exact path="/highscores" component={HighScores} />
            <Route
              exact
              path="/snake"
              render={props => (
                <Snake
                  {...props}
                  authUser={
                    this.state.authUser
                      ? this.state.authUser.uid
                      : undefined
                  }
                />
              )}
            />
            <Route
              exact
              path="/brickbreaker"
              render={props => (
                <Brickbreaker
                  {...props}
                  authUser={
                    this.state.authUser
                      ? this.state.authUser.uid
                      : undefined
                  }
                />
              )}
            />
            <Route
              exact
              path="/accountpage"
              render={AccountPage}
                />
              )}
            />
            {/* <AuthUserContext.Consumer>
            <Route
              path="/api/scores/:id/:name"
              render={props => ({authUser =>
            condition(authUser) ? <AccountPage {...this.props} /> : null
          })}
          </AuthUserContext.Consumer> */}

            {/* <AuthUserContext.Consumer>
              <Route path="/api/scores/:id/:name"
              render=
            </AuthUserContext.Consumer> */}
            {/* <Route
              path="/api/scores/:id/:name"
              render={authUser={condition(authUser) ? <AccountPage /> : null}}
              
              render={props => (
                <AccountPage
                  {...props}
                  authUser={
                    condition(authUser)
                      ? this.state.authUser.uid
                      : undefined
                  }
                />
              )}
            /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withAuthentication(App);
