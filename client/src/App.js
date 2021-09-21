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
        {/* <Link>http://localhost:300
          <img to="/" className="logo" src={"./image/twitter-icon.png"} />
        </Link> */}
        <Link to="/" className="search home">
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
        <Route exact path="/" component={Welcome} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Favorite" component={Favorite} />
      </Switch>
    </Router>
  );
}

export default App;
