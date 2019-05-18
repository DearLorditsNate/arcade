import React from "react";
import "../../App.css";
import SignOutBtn from "../SignOutBtn";
import AccountPageBtn from "../AccountPageBtn";
import SignUpModal from "../SignUpModal";
import SignInModal from "../SignInModal";
import { AuthUserContext } from "../Session";
import "./style.css";

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
        src="/assets/jes.png"
        width="50"
        height="50"
        className="d-inline-block align-middle mr-2"
        alt=""
      />
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
    <div
      className="collapse navbar-collapse mr-auto w-100 justify-content-between"
      id="navbarNav"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <button type="button" className="nav-btn">
              Game List
            </button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/highscores">
            <button type="button" className="nav-btn">
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
        src="/assets/jes.png"
        width="50"
        height="50"
        className="d-inline-block align-middle mr-2"
        alt=""
      />
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
    <div
      className="collapse navbar-collapse mr-auto w-100 justify-content-between"
      id="navbarNav"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <button type="button" class="nav-btn">
              Game List
            </button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/highscores">
            <button type="button" class="nav-btn mb-2 mb-lg-0">
              Global High Scores
            </button>
          </a>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item mr-lg-3 mr-0 mb-3 mb-lg-0">
          <AccountPageBtn uid={props.uid} />
        </li>
        <li className="nav-item">
          <SignOutBtn />
        </li>
      </ul>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      <img
        src="/assets/jes.png"
        width="50"
        height="50"
        className="d-inline-block align-middle mr-2"
        alt=""
      />
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
    <div
      className="collapse navbar-collapse mr-auto w-100 justify-content-between"
      id="navbarNav"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <button type="button" class="nav-btn">
              Game List
            </button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/highscores">
            <button type="button" class="nav-btn mb-2 mb-lg-0">
              Global High Scores
            </button>
          </a>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item mr-lg-3 mr-0 mb-3 mb-lg-0">
          <SignInModal />
        </li>
        <li className="nav-item">
          <SignUpModal />
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
