import React, { useEffect, useState } from "react";
import { getData } from "../../services/getData";
import Filter from "../Filter/Filter";
import DesktopNav from "../Header/DesktopNav";
import MobileNav from "../Header/MobileNav";
import Results from "../Results/Results";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    getData()
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="home">
      {isMobile ? <MobileNav /> : <DesktopNav />}
      <Filter />
      <Results />
    </div>
  );
};

export default Home;
