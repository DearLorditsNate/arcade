import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Tetris from "./components/Tetris";
import Snake from "./components/Snake";
import Navbar from "./components/Navbar";



class App extends Component {
  state = {};

  isSignedIn = uid => {
    this.setState({ uid: uid });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar uid={this.state.uid} />
          <Switch>
            <Route exact
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

export default App;
