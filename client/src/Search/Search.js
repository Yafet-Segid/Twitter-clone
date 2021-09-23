import React from "react";
import "./Search.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Search = () => {
  // const { onSearch } = props;

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    axios
      .get(`/search?text=${searchText}`)
      .then((response) => {
        setData(response.data.statuses);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // function handleInput(e) {
  //   const searchText = e.target.value;
  //   setSearchText(searchText);
  // }
  return (
    <>
      <form className="listBox" onSubmit={handleFormSubmit}>
        <span className="search_box0">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            className="search-tweet"
            type="text"
            placeholder="Search Twitter..."
          />
        </span>
        <button type="submit">Search</button>
      </form>
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
