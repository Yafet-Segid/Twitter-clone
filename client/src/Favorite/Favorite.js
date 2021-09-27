import React from "react";
import "./Favorite.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";

const Favorite = () => {
  const [list, setList] = useState([]);

  function handleClickEspn() {
    axios
      .get(`/favorite/espn`)
      .then((response) => {
        setList(response.data);
        // setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(list);

  function handleClickNasa() {
    axios
      .get(`/favorite/nasa`)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleClick() {
    axios
      .get(`/favorite/tesla`)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleClickMkbhd() {
    axios
      .get(`/favorite/mkbhd`)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleClickryan() {
    axios
      .get(`/favorite/Ryan`)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="topList">
        <img
          onClick={handleClickEspn}
          className="Resize"
          src={"./image/espn.png"}
        />
        <img
          onClick={handleClickNasa}
          className="Resize"
          src={"./image/nasa.png"}
        />
        <img
          onClick={handleClick}
          className="Resize"
          src={"./image/tesla.png"}
        />
        <img
          onClick={handleClickMkbhd}
          className="Resize"
          src={"./image/mkbhd.png"}
        />
        <img
          onClick={handleClickryan}
          className="Resize"
          src={"./image/ryan.png"}
        />
      </div>
      <div>
        <ul className="tweetFrame">
          {list.map((person) => (
            <ul className="tweetBox" key={person}>
              <li className="profileImage">
                {person.user.profile_image_url && (
                  <img src={person.user.profile_image_url} />
                )}
              </li>
              <li className="tweet">
                <li className="tweets" key={person.id}>
                  {person.full_text}
                </li>
                {person.extended_entities?.media[0]?.media_url && (
                  <img
                    className="tweetImage"
                    src={person.extended_entities?.media[0]?.media_url}
                  />
                )}
                <ul className="tweetIcon">
                  <MdFavoriteBorder size="18px" />
                  <li className="likeIcon">{person.retweet_count}</li>
                  <AiOutlineRetweet className="retweetIconLogo" size="18px" />
                  <li className="retweetIcon">{person.favorite_count}</li>
                </ul>
              </li>
            </ul>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Favorite;
