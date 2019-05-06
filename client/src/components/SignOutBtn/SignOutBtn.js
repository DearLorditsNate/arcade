import React from "react";
import { withFirebase } from "../Firebase";

const SignOutBtn = ({ firebase }) => (
  <button type="button" className="btn btn-danger" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutBtn);