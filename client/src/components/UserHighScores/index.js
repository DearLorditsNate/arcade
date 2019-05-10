import React from "react";

function UserHighScores(props) {
    return (
      <table>
        <thead>
          <tr>
            <th score="col">Position</th>
            <th score="col">Score</th>
            <th score="col">Game</th>
          </tr>
        </thead>
        <tbody>
            {props.scores.map(i => 
                <tr>
                    <th scope="row">{i.position}</th>
                    <td>{i.score}</td>
                    <td>{i.gameName}</td>
                </tr>
                )}
        </tbody>
      </table>
    );
}

export default UserHighScores;