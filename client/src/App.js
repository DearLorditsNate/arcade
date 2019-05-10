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

class App extends Component {

  render = () => {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/tetris" component={Tetris} />
            <Route exact path="/snake" component={Snake} />
            <Route exact path="/brickbreaker" component={Brickbreaker} />
            <Route exact path="/highscores" component={HighScores} />
            <Route exact path="/account" render={AccountPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withAuthentication(App);
