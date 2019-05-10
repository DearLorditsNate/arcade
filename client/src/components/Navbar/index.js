import React from "react";
import "../../App.css";
import SignInForm from "../SignInForm";
import SignOutBtn from "../SignOutBtn";
import AccountPageBtn from "../AccountPageBtn";
import SignUpModal from "../SignUpModal";
import { PromiseProvider } from "mongoose";


const Navbar = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth uid={authUser.uid}/> : <NavigationNonAuth />}</div>
);

const NavigationAuth = (props) => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">
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
          <a class="nav-link" href="/">
            Home <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/highscores">
            Global High Scores {props.uid}
          </a>
        </li>
      </ul>
    </div>
    <AccountPageBtn uid={props.uid} />
    <SignOutBtn />
  </nav>
);

const NavigationNonAuth = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">
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
          <a class="nav-link" href="/">
            Home <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/highscores">
            Global High Scores
          </a>
        </li>
      </ul>
    </div>
    <SignInForm />
    or &nbsp; &nbsp;
    <SignUpModal />
  </nav>
);

export default Navbar;
