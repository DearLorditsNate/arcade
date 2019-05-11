import React from "react";
import GameCard from "../../components/GameCard";
import Container from "../../components/Container";

class LandingPage extends React.Component {

  render() {
    return (
      <div className="landingPage">
        <Container>
          <GameCard />
        </Container>
      </div>
    );
  }
}

export default LandingPage;


