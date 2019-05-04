import React from 'react';
import './style.css'

class Snake extends React.Component {
    render(){
        return (
            <div id='wrapper'>
                <canvas id='snakeCanvas' width='800' height='400'></canvas>
                <h2>Score: <span id='snakeScore'>0</span></h2>
                <h2 id='snakeLoseMessage'>You lose!</h2>
            </div>
        )
    }
}

export default Snake;