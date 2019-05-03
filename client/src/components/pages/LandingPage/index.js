import React from "react";
import AdBanner from "../../AdBanner"
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "../Pages.css";

class LandingPage extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <AdBanner/>
                <Footer />
            </div>
        )
    }
}

export default LandingPage;


