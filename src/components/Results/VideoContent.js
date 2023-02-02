import React from "react";
import "./VideoContent.scss";

const VideoContent = ({ obj }) => {

  return (
    <div className="videoContent">
      {obj && (
        <>
          <img
            className="videoImg"
            src={obj?.snippet?.thumbnails?.medium?.url}
          />
          <span>{obj?.snippet?.description}</span>
        </>
      )}
    </div>
  );
};
export default VideoContent;
