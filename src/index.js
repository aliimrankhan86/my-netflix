import React from "react";
import ReactDOM from "react-dom";
import NetflixBar from "./NetflixBar";
import Search from "./Search";

import "./styles.css";

function App() {
  var defaultstyles = {
    margin: 0,
    padding: 0
  }
  return (
    <div style={defaultstyles} className="wrapper">
      <NetflixBar />
      <div className="searchresults">
        <Search />
        {/* <Results /> */}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
