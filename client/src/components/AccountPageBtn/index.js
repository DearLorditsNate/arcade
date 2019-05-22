import React from "react";
import "./style.css";

function AccountPageBtn() {
    return (
      <a href="/account">
        <button type="button" className="act-btn-scores">
          My High Scores
        </button>
      </a>
    );
}

export default AccountPageBtn;