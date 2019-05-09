import React from "react";
import "./style.css";
import Table from '../GameLeaderBoard/table'

class SnakeStats extends React.Component {
    render() {
        return (

            <div className="snakeStats">
              <h4>Stats</h4> 
              <h2 id='snakeLoseMessage'>whatgoeshere?</h2> 
                <p> {new Date().toLocaleDateString()}.</p>
                <p> {new Date().toLocaleTimeString()}.</p>
                <h2>Score: <span id='snakeScore'>0</span></h2>
                
                <Table game='snake'/>
            </div>
        )
    }
}
export default SnakeStats;