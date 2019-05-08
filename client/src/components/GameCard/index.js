import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class GameCard extends React.Component {
    render() {
        return (
          <div>
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_34jn0KvvepwMdcbon62cgX-MPZYe-NaNl2hoA1-p3IithP42MQ"
                class="card-img-top"
                alt="tetris"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and
                  make up the bulk of the card's content.
                </p>
                <a href="/tetris" className="btn btn-primary">
                  Play Tetris
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src="https://www.coolmathgames.com/sites/cmatgame/files/snake.png"
                className="card-img-top"
                alt="snake"
              />
              <div className="card-body">
                <h5 className="card-title">Snake</h5>
                <p className="card-text">
                  Use the arrow Keys to make the snake eat the babysnake
                </p>
                <a href="/snake" className="btn btn-primary">
                  Play Snake
                </a>
              </div>
            </div>
          </div>
        );
    }
}

export default GameCard;

