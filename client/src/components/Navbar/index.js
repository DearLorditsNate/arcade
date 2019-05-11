import React from "react";
import "../../App.css";
import SignInForm from "../SignInForm";
import SignOutBtn from "../SignOutBtn";
import AccountPageBtn from "../AccountPageBtn";
import SignUpModal from "../SignUpModal";
import SignInModal from "../SignInModal";
import { AuthUserContext } from "../Session";

const Navbar = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => authUser ? <NavigationAuth uid={authUser.uid} /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      <img
        src="https://img06.deviantart.net/319c/i/2011/073/4/d/8bit_mario_by_anone52-d3bmhtj.jpg"
        width="30"
        height="50"
        className="d-inline-block align-middle mr-2"
        alt=""
      />
      Retro Arcade
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            Game List <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/highscores">
            Global High Scores
          </a>
        </li>
      </ul>
    </div>
    <AccountPageBtn uid={props.uid} />
    <SignOutBtn />
  </nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      <img
        src="https://img06.deviantart.net/319c/i/2011/073/4/d/8bit_mario_by_anone52-d3bmhtj.jpg"
        width="30"
        height="50"
        className="d-inline-block align-middle mr-2"
        alt=""
      />
      Retro Arcade
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            Game List <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/highscores">
            Global High Scores
          </a>
        </li>
      </ul>
    </div>
    <SignInModal />
    &nbsp; or &nbsp;
    <SignUpModal />
  </nav>
);

export default Navbar;
