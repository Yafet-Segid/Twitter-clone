import React from "react";
import "./HomePage.css";
import axios from "axios";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    getTweets();
  }, []);

  function getTweets() {
    axios
      .get("/api/tweets")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //
  return (
    <>
      <div className="listBox">
        <span className="search_box">
          <input
            className="search-tweet"
            type="text"
            placeholder="Search Twitter..."
          />
        </span>
      </div>
    </>
  );
};

export default HomePage;
