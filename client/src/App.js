import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Welcome from "./Welcome/Welcome";
import Search from "./Search/Search";
import Favorite from "./Favorite/Favorite";

function App() {
  return (
    <Router>
      <div className="header">
        <img className="logo" src={"./image/twitter-icon.png"} />
        <Link to="/home" className="search home">
          Home
        </Link>
        <Link to="/Search" className="search">
          Search
        </Link>
        <Link to="/Favorite" className="search">
          Favorites
        </Link>
      </div>
      <Switch>
        <Route exact path="/home" component={Welcome} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Favorite" component={Favorite} />
      </Switch>
    </Router>
  );
}

export default App;
