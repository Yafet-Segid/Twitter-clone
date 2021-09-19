import React from "react";
import "./HomePage.css";
import axios from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState(null);

  useEffect(() => {
    getTweets();
    handleInput();
  }, []);

  function getTweets() {
    axios
      .get(`/api/tweets`)
      .then((response) => {
        setData(response.data.statuses);
      })
      .catch((error) => {
        console.log(error);
      });
    // search
    function handleInput() {
      axios
        .get(`/search`)
        .then((response) => {
          setData(response.data.statuses);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <>
      <div className="listBox">
        <span className="search_box0" onClick={handleInput}>
          <input
            onChange={(event) => setSearchValue(event.target.value)}
            className="search-tweet"
            type="text"
            placeholder="Search Twitter..."
          />
        </span>
      </div>
      <div>
        <ul className="tweetFrame">
          {data.map((person) => (
            <li className="tweetBox" key={person.id}>
              {person.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
