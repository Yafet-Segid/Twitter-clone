import React from "react";
import "./Twitter.css";

const Welcome = () => {
  return (
    <div className="container">
      <div>
        <h1 className="Header_text">
          What
          <br /> Happening
          <br /> Right <br />
          now
        </h1>
      </div>
      <img className="big_bird" src={"./image/twitter-icon.png"} />
    </div>
  );
};

export default Welcome;
