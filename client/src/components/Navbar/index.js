import React from "react";
import "../../App.css";
import SignInForm from "../SignInForm";
import { FirebaseContext } from "../Firebase";

function Navbar(props) {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      id="user-id"
      data-id={props.uid}
    >
      <a class="navbar-brand" href="#">
        <img
          src="https://img06.deviantart.net/319c/i/2011/073/4/d/8bit_mario_by_anone52-d3bmhtj.jpg"
          width="30"
          height="50"
          class="d-inline-block align-middle mr-2"
          alt=""
        />
        Retro Arcade
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Games
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Global High Scores
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              You are signed in as user {props.uid}
            </a>
          </li>
        </ul>
      </div>
      <FirebaseContext.Consumer>
        {firebase => (
          <SignInForm
            isSignedIn={props.isSignedIn}
            firebase={firebase}
          />
        )}
      </FirebaseContext.Consumer>
    </nav>
  );
}
export default Navbar;
