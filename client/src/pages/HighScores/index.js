import React from "react";
import Footer from "../../components/Footer";
import GlobalHighScores from "../../components/GlobalHighScores";
import "./style.css";




class HighScores extends React.Component {
    state = {
        scores: [],

    }

    
    render() {
        return (
            <div>
                <GlobalHighScores  />
                
                {/* <Footer /> */}
            </div>
        )
    }
   
    }




export default HighScores;