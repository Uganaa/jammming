import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults(props) {
  return (
    <div>
      <h2>Search Results: </h2>
      <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
}

export default SearchResults;
