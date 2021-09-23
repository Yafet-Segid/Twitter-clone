const express = require("express");
const path = require("path");
const axios = require("axios");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const token = process.env.TOKEN;

const app = express();
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/search", (req, res) => {
  axios
    .get(`https://api.twitter.com/1.1/search/tweets.json?q=${req.query.text}`, {
      headers: {
        Authorization: ` Bearer ${token}`,
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Favorites
app.get("/favorite/nba", async (req, res) => {
  await axios
    .get(
      `https://api.twitter.com/1.1/search/tweets.json?tweet_mode=extended&q=nba`,
      {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => console.log(error));
});

app.get("/favorite/nasa", async (req, res) => {
  await axios
    .get(
      `https://api.twitter.com/1.1/search/tweets.json?tweet_mode=extended&q=nasa`,
      {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => console.log(error));
});

app.listen(PORT, () => console.log(`Server on port ${PORT} `));
//
