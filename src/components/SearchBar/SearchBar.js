import React, { useCallback, useState } from "react";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  const handleInputChange = useCallback((inTxt) => {
    setQuery(inTxt.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    if (props.onSearch) {
      props.onSearch(query);
    }
  }, [props.onSearch, query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a song"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
