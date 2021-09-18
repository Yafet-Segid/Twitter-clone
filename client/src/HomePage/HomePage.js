import React from "react";
import "./HomePage.css";
import axios from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {
  state = {
    persons: [],
  };

  useEffect(() => {
    getTweets();
  }, []);

  function getTweets() {
    axios
      .get("/api/tweets")
      .then((response) => {
        const persons = response.data;
        this.setState({ persons });
      })
      .catch((error) => {
        console.log(error);
      });
  }
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
      <div>
        <ul>
          {this.state.persons.map((person) => (
            <li key={person.id}> {person.statuses.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
