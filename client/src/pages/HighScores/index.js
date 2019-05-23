import React from "react";
import GlobalHighScores from "../../components/GlobalHighScores";

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
