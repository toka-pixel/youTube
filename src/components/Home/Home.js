import React, { useEffect, useState } from "react";
import { getData } from "../../services/getData";
import Filter from "../Filter/Filter";
import Nav from "../Header/Nav";
import Channel from "../Results/Channel";
import VideoContent from "../Results/VideoContent";
import Loading from "../shared-components/Loading/Loading";
import MobileFilter from "../Filter/mobileFilter";
import "./Home.scss";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(0);

  const youtubeData = () => {
    getData(searchValue)
      .then((res) => {
        setData([...data, ...res.data.items]);

        setTotalResults(res.data.pageInfo.totalResults);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    youtubeData();
  }, [page]);
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    youtubeData();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [data]);

  const handleResize = () => {
    if (window.screen.width <= 600 || window.innerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
  }, [window.screen.width, window.innerWidth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    youtubeData();
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="home">
      {
        <Nav
          isMobile={isMobile}
          searchValue={searchValue}
          handleSearch={handleChange}
          handleSubmit={handleSubmit}
        />
      }

      {isMobile ? <MobileFilter /> : <Filter totalResults={totalResults} />}
      {data.length > 0 ? (
        <div className="results container">
          <Channel obj={data[0]} />
          {data.map((obj) => (
            <VideoContent key={Math.random()} obj={obj} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
