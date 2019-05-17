import React from "react";
import { withFirebase } from "../Firebase";
import "./style.css";

const SignOutBtn = ({ firebase }) => (
  <button type="button" className="act-btn-signout" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutBtn);