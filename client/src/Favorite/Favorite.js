import React from "react";
import "./Favorite.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Favorite = () => {
  const [list, setList] = useState([]);

  function getImage() {
    // alert("Clicked Tesla Page");
  }

  function handleClick() {
    axios
      .get(`/favorite/nba`)
      .then((response) => {
        setList(response.data.statuses);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleClickNasa() {
    axios
      .get(`/favorite/nasa`)
      .then((response) => {
        setList(response.data.statuses);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="topList">
        <img src={"./image/nba.png"} />
        <img onClick={handleClickNasa} src={"./image/nasa.png"} />
        <button>
          <img onClick={handleClick} src={"./image/tesla.png"} />
        </button>
        <img src={"./image/mkbhd.png"} />
        <img src={"./image/ryan.png"} />
      </div>
      <div>
        <ul className="tweetFrame">
          {list.map((person) => (
            <li className="tweetBox" key={person.id}>
              {person.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Favorite;
