import React from "react";
import "./Search.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Search = () => {
  // const { onSearch } = props;

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   // getTweets();
  //   // handleInput();
  // }, []);

  // function getTweets() {
  //   axios
  //     .get(`https://api.twitter.com/1.1/search/tweets.json?q=tesla`)
  //     .then((response) => {
  //       setData(response.data.statuses);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  function handleInput(e) {
    const searchText = e.target.value;
    setSearchText(searchText);

    axios
      .post(`/search?text=${searchText}`)
      .then((response) => {
        setData(response.data.statuses);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="listBox">
        <span className="search_box0">
          <input
            onChange={handleInput}
            value={searchText}
            className="search-tweet"
            type="text"
            placeholder="Search Twitter..."
          />
        </span>
        <button type="submit" onClick={handleInput}>
          Search
        </button>
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

export default Search;
