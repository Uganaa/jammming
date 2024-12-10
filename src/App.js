import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const search = (query) => {
    setSearchResults(query)
    console.log("Search Complete for", query);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <SearchBar onSearch={search} />
    </div>
  );
}

export default App;
