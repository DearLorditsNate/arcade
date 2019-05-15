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
          className="offset-2 col-6 margin-top"
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
                Use the left, down and right arrow keys to move your piece.
                Use the space bar to drop your piece into place and use the
                up arrow to rotate your piece.
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
        </Carousel>
      </Row>
    );
  }
}

export default ControlledCarousel;