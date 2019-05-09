import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SignUpForm from "../SignUpForm";

class SignUpModal extends Component {
constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Create Account
        </Button>

        <Modal {...this.props} show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              Create an Account
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignUpForm onClick={this.handleClose} />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SignUpModal;