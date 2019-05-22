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
import Container from "./components/Container";
import Minesweeper from "./components/Minesweeper";
import battlegame from './components/BattleGame';

class App extends Component {

  render = () => {
    return (
      <Router>
        <div>
          <Navbar />
          <Container>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/tetris" component={Tetris} />
              <Route exact path="/snake" component={Snake} />
              <Route exact path="/brickbreaker" component={Brickbreaker} />
              <Route exact path="/highscores" component={HighScores} />
              <Route exact path="/account" render={AccountPage} />
              <Route exact path="/minesweeper" render= {Minesweeper}/>
              <Route exact path="/battlegame" render = {battlegame} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default withAuthentication(App);
