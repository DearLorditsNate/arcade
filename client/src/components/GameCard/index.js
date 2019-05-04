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
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and
                  make up the bulk of the card's content.
                </p>
                <Link to="/Tetris" class="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
            <div class="card">
              <img
                src="https://www.coolmathgames.com/sites/cmatgame/files/snake.png"
                class="card-img-top"
                alt="snake"
              />
              <div class="card-body">
                <h5 class="card-title">Snake</h5>
                <p class="card-text">
                  Use the arrow Keys to make the snake eat the babysnake
                </p>
                <a
                  href="/Snake"
                  onClick={() => this.props.handleStateChange("Snake")}
                  class="btn btn-primary"
                >
                  Play Snake
                </a>
              </div>
            </div>
          </div>
        );
    }
}

export default GameCard;

