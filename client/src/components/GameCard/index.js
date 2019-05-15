import React from "react";
import Row from "../Row";
// import "./style.css";

class GameCard extends React.Component {
    render() {
        return (
          <Row>
            <div className="col-3">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_34jn0KvvepwMdcbon62cgX-MPZYe-NaNl2hoA1-p3IithP42MQ"
                  className="card-img-top"
                  alt="tetris"
                />
                <div className="card-body">
                  <h5 className="card-title">Tetris</h5>
                  <p className="card-text">
                    Use the left, down and right arrow keys to move your
                    piece. Use the space bar to drop your piece into
                    place and youe the up arrow to rotate your piece.
                  </p>
                  <a href="/tetris" className="btn btn-primary">
                    Play Tetris
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img
                  src="https://www.coolmathgames.com/sites/cmatgame/files/snake.png"
                  className="card-img-top"
                  alt="snake"
                />
                <div className="card-body">
                  <h5 className="card-title">Snake</h5>
                  <p className="card-text">
                    Use the arrow Keys to make the snake eat the
                    babysnake
                  </p>
                  <a href="/snake" className="btn btn-primary">
                    Play Snake
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/appbajar/uploads/apk-screen/1633CU51454620333-img.png"
                  className="card-img-top"
                  alt="brickbreaker"
                />
                <div className="card-body">
                  <h5 className="card-title">Brickbreaker</h5>
                  <p className="card-text">
                    Bounce the ball... smash the bricks... bada bing
                    bada boom!
                  </p>
                  <a href="/brickbreaker" className="btn btn-primary">
                    Play Brickbreaker
                  </a>
                </div>
              </div>
            </div>
           
          </Row>
        );
    }
}

export default GameCard;

