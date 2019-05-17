import React from "react";
import "../../App.css";
import SignOutBtn from "../SignOutBtn";
import AccountPageBtn from "../AccountPageBtn";
import SignUpModal from "../SignUpModal";
import SignInModal from "../SignInModal";
import { AuthUserContext } from "../Session";

const Navbar = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => {
        if (authUser === null) {
          return <NavigationNeutral />
        } else if (authUser === false) {
          return <NavigationNonAuth />
        } else {
          return <NavigationAuth />
        }
      }
    }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationNeutral = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        width="50"
        height="50"
        className="d-inline-block align-middle mr-2"
        alt=""
      />
      JES
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
        <li className="nav-item">
          <a className="nav-link" href="/">
            <button type="button" class="btn btn-primary">
              Game List
            </button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/highscores">
            <button type="button" class="btn btn-primary">
              Global High Scores
            </button>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

const NavigationAuth = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        width="50"
        height="50"
        className="d-inline-block align-middle mr-2"
        alt=""
      />
      JES
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
        <li className="nav-item">
          <a className="nav-link" href="/">
            <button type="button" class="btn btn-primary">
              Game List
            </button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/highscores">
            <button type="button" class="btn btn-primary">
              Global High Scores
            </button>
          </a>
        </li>
      </ul>
    </div>
    <AccountPageBtn uid={props.uid} />
    &nbsp; &nbsp;
    <SignOutBtn />
  </nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        width="50"
        height="50"
        className="d-inline-block align-middle mr-2"
        alt=""
      />
      JES
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
        <li className="nav-item">
          <a className="nav-link" href="/">
            <button type="button" class="btn btn-primary">
              Game List
            </button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/highscores">
            <button type="button" class="btn btn-primary">
              Global High Scores
            </button>
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
