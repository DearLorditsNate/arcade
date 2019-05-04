import React from 'react';
import "./App.css";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Tetris from "./components/Tetris";
import Snake from "./components/Snake"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class App extends React.Component {

  changeState = (newHighScore)=> {
    this.setState({highScore:newHighScore})
    console.log('new high score: ' + this.state.highScore)
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <div>
              <Route exact path='/Tetris' component={Tetris} />
              <Route exact path='/Snake' component={Snake} />
              <Route exact path='/' component={LandingPage} />
            </div>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
