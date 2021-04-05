import React from "react";

const PortfolioItem = (props) => (
  <div>
    <h1>Portfolio Item</h1>
    <p>This is page is for the item with the id of {props.match.params.id}</p>
  </div>
);

export default PortfolioItem;
