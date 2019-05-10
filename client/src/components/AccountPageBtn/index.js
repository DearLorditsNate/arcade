import React from "react";

function AccountPageBtn(props) {
    const userRoute = "/api/scores/" + props.uid + "/snake";
    console.log(userRoute);
    return (
      <button type="button" className="btn btn-success" href={userRoute}>
        My Account
      </button>
    );
}

export default AccountPageBtn;