import React from "react";
import "./Channel.scss";

const Channel = ({ obj }) => {
  return (
    <div className="channel">
      <img className="videoImg" src={obj?.snippet?.thumbnails?.medium?.url} />
      <div className="content">
        <p className="name">{obj?.snippet?.channelTitle}</p>
        <p className="description">{obj?.snippet?.title}</p>
      </div>
    </div>
  );
};
export default Channel;
