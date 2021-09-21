const express = require("express");
const path = require("path");
const axios = require("axios");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const token = process.env.TOKEN;

const app = express();
app.use(express.static(path.join(__dirname, "client", "build")));
//

// app.get("/api/tweets", (req, res) => {
//   axios
//     .get(`https://api.twitter.com/1.1/search/tweets.json?q=tesla`, {
//       headers: {
//         Authorization: ` Bearer ${token}`,
//       },
//     })
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

app.get("/search", (req, res) => {
  console.log("get a data" + req);
  axios
    .post(`https://api.twitter.com/1.1/search/tweets.json?q=${searchText}`, {
      headers: {
        Authorization: ` Bearer ${token}`,
      },
    })
    .then((response) => {
      req.query(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Favorites
app.get("/favorite/nba", async (req, res) => {
  await axios
    .get(`https://api.twitter.com/1.1/search/tweets.json?q=nba`, {
      headers: {
        Authorization: ` Bearer ${token}`,
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => console.log(error));
});

app.get("/favorite/nasa", async (req, res) => {
  await axios
    .get(`https://api.twitter.com/1.1/search/tweets.json?q=nasa`, {
      headers: {
        Authorization: ` Bearer ${token}`,
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => console.log(error));
});

app.listen(PORT, () => console.log(`Server on port ${PORT} `));
//
