import React, { Component } from "react";
import {Row} from 'react-materialize';
import PortfolioCard from "../components/PortfolioCard";
import Title from "../components/Title";
import portfoliocards from "../portfoliocards.json";
import "../App.css";

class Display extends Component {

// Setting this.state.friends to the portfoliocards json array
  state = {
    portfoliocards
  };

  render() {
    return (
    <div>
        <Row>
          <Title 
            name={this.state.portfoliocards.name}
            linkedIn={this.state.portfoliocards.linkedIn}
            headshot={this.state.portfoliocards.headshot}
            email={this.state.portfoliocards.email}
            bio={this.state.portfoliocards.bio}
          />
        </Row>
        <Row>
          {this.state.portfoliocards.projects.map(portfoliocard => (
            <PortfolioCard
              id={portfoliocard.id}
              key={portfoliocard.id}
              project={portfoliocard.project}
              image={portfoliocard.image}
              description={portfoliocard.description}
              team={portfoliocard.team}
              link={portfoliocard.link}
              github={portfoliocard.github}
              technologiesKeywords={portfoliocard.technologiesKeywords}
            />
          ))}
        </Row>
     </div> 
    );
  }
}


export default Display;
