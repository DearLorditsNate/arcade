import React from 'react';

import "./App.css";
import LandingPage from "./pages/LandingPage";
import Tetris from "./components/Tetris";
import Snake from "./components/Snake"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
      <div>
        <Route exact path='/Tetris' component={Tetris}/>
        <Route exact path='/Snake' component={Snake}/>
        <Route exact path='/' component={LandingPage}/>        
      </div>
      </Switch>
    </Router>
  );
}

export default App;
