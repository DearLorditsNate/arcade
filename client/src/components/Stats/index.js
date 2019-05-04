import React from "react";

class Stats extends React.Component {
    render() {
        return (

            <div className="leftSideDiv">
                Stats
<p> {new Date().toLocaleDateString()}.</p>
                <p> {new Date().toLocaleTimeString()}.</p>
            </div>
        )
    }
}
export default Stats;