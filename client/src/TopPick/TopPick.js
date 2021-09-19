import React from "react";
import "./TopPick.css";
// import nba from "../nba.png";

const TopPick = () => {
  // const [image, setImage] = useImage([]);

  // useEffect(() => {
  //   getImage();
  // }, []);

  // function getImage() {
  //   axios
  //     .get("https://api.twitter.com/1.1/search/tweets.json?q=tesla")
  //     .then((response) => {
  //       setData(response.data.statuses);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <div className="topList">
      <img src={"./image/nba.png"} />
      <img src={"./image/nasa.png"} />
      <img src={"./image/tesla.png"} />
      <img src={"./image/mkbhd.png"} />
      <img src={"./image/ryan.png"} />
    </div>
  );
};

export default TopPick;
