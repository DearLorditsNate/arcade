import React, { Component } from "react";
import { withFirebase } from "../Firebase";

const initialState = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(userAuth => {
        this.setState({ ...initialState });
        console.log("Log in success!");
        console.log(userAuth);
        this.props.isSignedIn(userAuth.user.uid);
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
          error
      } = this.state;

      return (
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email Address"
            id="sign-in-email"
          />
          <input
            name="password"
            value={password}
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
            id="sign-in-password"
          />
          <button className="btn-success" type="submit" id="sign-in-button">
            Sign In
          </button>

          {error && <p>{error.message}</p>}
        </form>
      );
  }
}

export default withFirebase(SignInForm);