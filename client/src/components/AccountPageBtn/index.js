import React from "react";

function AccountPageBtn(props) {
    // const userRoute = "/api/scores/" + props.uid + "/snake";
    return (
      <button type="button" className="btn btn-success" href="/account">
        My Account
      </button>
    );
}

export default AccountPageBtn;