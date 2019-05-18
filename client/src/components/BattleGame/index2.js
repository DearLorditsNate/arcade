import React from "react";
import './style.css'
import { AuthUserContext } from "../Session";
const Bbattlegame = () => (
    <AuthUserContext.Consumer>
    {authUser => (authUser ? <Snake uid={authUser.uid} /> : <Snake />)}
  </AuthUserContext.Consumer>
);
class Battlegame extends React.Component {
    componentDidMount() {
  
      let script = document.createElement("script");
      let script2 = document.createElement("script");
  
      script.src = "./js/battlegame/battlegame.js";
  
      //check if the script tags have not yet been added
      let scriptTags = document.getElementsByTagName('script');
      let scriptSources = [];
      for (var i = 0; i < scriptTags.length; i++) {
        scriptSources.push(scriptTags[i].outerHTML);
      }
  
      //turn script tage into strings so they can strictly match the scriptSources array
      let scriptstring1 = `<script src="./js/snake/snake.js"></script>`
  
      if (scriptSources.indexOf(scriptstring1) === -1) {
        document.body.appendChild(script2);
        document.body.appendChild(script);
      }
    };
    export default Battlegame;