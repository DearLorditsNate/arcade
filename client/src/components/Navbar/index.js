import React from "react";
import "../../App.css";

function Navbar(props) {
  return (
    <ul id="user-id" className="homeTab" data-id={props.uid}>
      <h1> WELCOME TO THE ARCADE!</h1>
      <p>You are signed in as user {props.uid}</p>
      <li>
        <a href="#home">Home</a>
      </li>
    </ul>
  );
}
export default Navbar;
