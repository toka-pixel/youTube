import React from "react";
import "./Filter.scss";

const Filter = ({ totalResults }) => {
  return (
    <div className="filter container">
      <p>About {totalResults} filtered results</p>
      <div className="categoryFilter">
        <img src="/imgs/filter.svg" />
        <p> Filter</p>
      </div>
    </div>
  );
};

export default Filter;
