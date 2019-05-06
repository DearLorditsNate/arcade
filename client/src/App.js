import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Tetris from "./components/Tetris";
import Snake from "./components/Snake";
import Navbar from "./components/Navbar";
import { withFirebase } from "./components/Firebase";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
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
            <Route exact path="/Tetris" component={Tetris} />
            <Route exact path="/Snake" component={Snake} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
