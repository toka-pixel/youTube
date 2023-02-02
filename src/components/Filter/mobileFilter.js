import React from "react";
import './Filter.scss';

const MobileFilter = () => {
  return (
    <div className="mobileFilter">
      <select name="" id="cars">
        <option value="All">All</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <select name="" id="cars">
        <option value="Any Time">Any Time</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default MobileFilter;
