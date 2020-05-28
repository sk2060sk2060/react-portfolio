import React from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image}/>
      </div>
      <div className="content">
        <a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a>
      </div>
    </div>
  );
}

export default PortfolioCard;
