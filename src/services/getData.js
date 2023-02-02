import axios from "axios";

export const getData = (search) => {
  return axios({
    method: "GET",
    url: "https://youtube.googleapis.com/youtube/v3/search",

    params: {
      q: search,
      part: "snippet",
      key: process.env.REACT_APP_API_KEY,
      nextPageToken: "CAUQAA",
      type: "video",
    },
  });
};
