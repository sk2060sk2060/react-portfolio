import React, { Component } from "react";
import PortfolioCard from "../PortfolioCard";
import list from "../../list.json";
import Wrapper from "../Wrapper";
import Title from "../Title";

class Portfolio extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Portfolio</Title>
        <hr></hr>
        {list.map(item => (
          <PortfolioCard
            id={item.id}
            key={item.id}
            name={item.name}
            image={require("../../images" + item.image)}
            url={item.url}
          />
          ))}
      </Wrapper>
    );
  }  
}

export default Portfolio;
