import React from "react";
import Navbar from "../Navbar";
import GameCard from "../GameCard";
import SignUpModal from "../SignUpModal";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
//import SnakeLanding from "../SnakeLanding";
import Modal from "react-bootstrap/Modal";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div className="landingPage">
        <Navbar />
        <GameCard />
        {/* <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            Launch vertically centered modal
          </Button>

          <SignUpModal show={this.state.modalShow} onHide={modalClose} />
        </ButtonToolbar> */}

        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default LandingPage;


