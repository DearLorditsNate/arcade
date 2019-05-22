import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "../Row";
import "./style.css";

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Row>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          className="offset-lg-2 col-12 col-lg-6 margin-top margin-top-small"
        >
          <Carousel.Item>
            <a href="/tetris" className="carousel-text">
              <img
                className="d-block w-50 card-img align-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_34jn0KvvepwMdcbon62cgX-MPZYe-NaNl2hoA1-p3IithP42MQ"
                alt="First slide"
              />
              <h1>Tetris</h1>
              <p className="pb-4">
                Use the arrow keys to move your piece.
                Use the space bar to drop your piece into place.
              </p>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="/snake" className="carousel-text">
              <img
                className="d-block w-50 card-img align-center"
                src="https://www.coolmathgames.com/sites/cmatgame/files/snake.png"
                alt="Second slide"
              />
              <h1>Snake</h1>
              <p className="pb-4">
                Use the arrow Keys to make the snake eat the babysnake.
              </p>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="/brickbreaker" className="carousel-text">
              <img
                className="d-block w-50 card-img align-center"
                src="https://s3-ap-southeast-1.amazonaws.com/appbajar/uploads/apk-screen/1633CU51454620333-img.png"
                alt="Third slide"
              />
              <h1>Brickbreaker</h1>
              <p className="pb-4">
                Bounce the ball... smash the bricks... bada bing bada boom!
              </p>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="/minesweeper" className="carousel-text">
              <img
                className="d-block w-50 card-img align-center"
                src="https://richerramblings.files.wordpress.com/2015/08/minesweeper.jpg"
                alt="Fourth slide"
              />
              <h1>Minesweeper</h1>
              <p className="pb-4">
                Find the bombs... or else!
              </p>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="/battlegame" className="carousel-text">
              <img
                className="d-block w-50 card-img align-center"
                src="data:image/jpeg;base64,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"
                alt="Second slide"
              />
              <h1>Solitary BattleShip</h1>
              <p className="pb-4">
                Feeling Lucky? 
                How Many Missiles Do You Need to Sink All of Your Enemies BattleShips?
                Click "Send Missle" To Find Out. 
              </p>
            </a>
          </Carousel.Item>
        </Carousel>
      </Row>
    );
  }
}

export default ControlledCarousel;