import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SignInForm from "../SignInForm";
import "./style.css";

class SignInModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
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
        <button
          type="button"
          className="sign-in-up-btn"
          onClick={this.handleShow}
        >
          Sign In
        </button>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignInForm onClick={this.handleClose} />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SignInModal;