import React, { useState } from "react";
import "./Nav.scss";

const Nav = ({ isMobile, handleSearch, handleSubmit, searchValue }) => {
  const [searchClose, setSearchClose] = useState(false);

  return (
    <div
      className={`${
        isMobile ? "mobileNav" : "desktopNav"
      } App-header container`}
    >
      {isMobile ? (
        <img src="/imgs/youtube-mobile.svg" width="40px" />
      ) : (
        <img src="/imgs/desktop-img.jpg" width="92px" />
      )}

      <form
        className={`${isMobile && searchClose ? "mobileForm" : "desktopForm"} `}
        onSubmit={handleSubmit}
      >
        {searchClose && isMobile ? (
          <p className="searchValue">{searchValue}</p>
        ) : (
          <input className="input" onChange={handleSearch} type="text" />
        )}
        <button type="submit">
          <img
            onClick={() => setSearchClose(!searchClose)}
            className="searchImg"
            src="/imgs/search.svg"
          />
        </button>
      </form>
    </div>
  );
};

export default Nav;
