import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Welcome from "./Welcome/Welcome";
import HomePage from "./HomePage/HomePage";
import TopPick from "./TopPick/TopPick";

function App() {
  return (
    <Router>
      <div className="header">
        {/* <Link>
          <img to="/" className="logo" src={"./image/twitter-icon.png"} />
        </Link> */}
        <Link to="/" className="search home">
          Home
        </Link>
        <Link to="/HomePage" className="search">
          Search
        </Link>
        <Link to="/TopPick" className="search">
          Favorites
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/HomePage" component={HomePage} />
        <Route exact path="/TopPick" component={TopPick} />
      </Switch>
    </Router>
  );
}

export default App;
