import React from "react";
import "./style.css";
import Table from '../GameLeaderBoard/table'
import Footer from "../Footer";

class TetrisStats extends React.Component {
  render() {
    return (
      <div>
        <div className="statsDiv">
          <h4>Stats</h4>
          <p> {new Date().toLocaleDateString()}.</p>
          <p> {new Date().toLocaleTimeString()}.</p>
          <h4>
            Score: <span id="score">0</span>
          </h4>
          <Table game='tetris' />
        </div>
        <Footer />
      </div>
    )
  }
}
export default TetrisStats;