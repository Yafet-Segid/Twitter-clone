const express = require("express");
const path = require("path");
const axios = require("axios");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const token = process.env.TOKEN;

const app = express();
app.use(express.static(path.join(__dirname, "client", "build")));
//

app.get("/api/tweets", (req, res) => {
  axios
    .get(`https://api.twitter.com/1.1/search/tweets.json`, {
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

app.get("/search", () => {
  axios
    .get("https://api.twitter.com/1.1/search/tweets.json", {
      headers: {
        Authorization: ` Bearer ${q}`,
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => console.log(`Server on port ${PORT} `));
