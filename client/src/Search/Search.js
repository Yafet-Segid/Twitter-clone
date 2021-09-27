import React from "react";
import "./Search.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  // const { onSearch } = props;

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    axios
      .get(`/search?text=${searchText}`)
      .then((response) => {
        setData(response.data);
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
        <span className="search_box">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            className="search-tweet"
            type="text"
            placeholder="Search Twitter..."
          />
          <button className="btn" type="submit">
            <FiSearch />
          </button>
        </span>
      </form>
      <div>
        <ul className="tweetFrame">
          {data.map((person) => (
            <ul className="tweetBox">
              <li className="profileImage">
                {person.user.profile_image_url && (
                  <img src={person.user.profile_image_url} />
                )}
              </li>

              <li key={person.id}>{person.full_text}</li>
              {person.extended_entities?.media[0]?.media_url && (
                <img
                  className="tweetImage"
                  src={person.extended_entities?.media[0]?.media_url}
                />
              )}
              <ul className="tweetIcon">
                <MdFavoriteBorder size="18px" />
                <li className="likeIcon">{person.retweet_count}</li>
                <AiOutlineRetweet size="18px" />
                <li className="retweetIcon">{person.favorite_count}</li>
              </ul>
            </ul>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
//
