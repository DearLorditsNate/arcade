import React from "react";
import GlobalHighScores from "../../components/GlobalHighScores";
import "./style.css";

class HighScores extends React.Component {
  state = {
    scores: []
  };

  render() {
    return (
      <div>
        <GlobalHighScores />
      </div>
    );
  }
}

export default HighScores;
