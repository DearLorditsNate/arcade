import React, { Component } from "react";

const initialState = {
  email: "",
  passowrd: "",
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
        error
    } = this.state;

    const isInvalid =
      password === "" ||
      email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">Sign Up</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default SignUpForm;