import React, { Component } from "react";
import "./style.css";
import { withFirebase } from "../Firebase";

const initialState = {
  email: "",
  password: "",
  error: null
};

class SignUpForm extends Component {
  
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
    .doCreateUserWithEmailAndPassword(email, password)
    .then(authUser => {
        this.setState({ ...initialState });
        console.log(authUser);
    })
    .catch(error => {
        this.setState({ error });
    });

    event.preventDefault();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const {
        email,
        password,
    } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Email Address"
          id="sign-up-email"
        />
        <input
          name="password"
          value={password}
          onChange={this.handleInputChange}
          type="password"
          placeholder="Password"
          id="sign-up-password"
        />
        <button
          id="sign-up-button"
          className="btn-success"
          type="submit"
          onClick={this.props.onClick}
        >
          Create Account
        </button>
      </form>
    );
  }
}

export default withFirebase(SignUpForm);