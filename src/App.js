import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import testTracks from "./components/testTracks/testTracks";
import Playlist from "./components/Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (track) => {
    setPlaylistTracks((prevTracks) => {
      if (prevTracks.some((t) => t.id === track.id)) return prevTracks;
      return [...prevTracks, track];
    });
  };

  const removeTrack = (track) => {
    setPlaylistTracks((prevTrack) =>
      prevTrack.filter((curTrack) => curTrack.id !== track.id)
    );
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = (track) => {
    setPlaylistTracks(track);
  };

  const search = (query) => {
    const matches = testTracks.filter((track) =>
      Object.values(track).some((value) => value === query)
    );
    setSearchResults(matches);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <SearchBar onSearch={search} />
      <SearchResults searchResults={searchResults} onAdd={addTrack} />
      <Playlist
        playlistName={playlistName}
        playlistTracks={playlistTracks}
        onNameChange={updatePlaylistName}
        onRemove={removeTrack}
        onSave={savePlaylist}
      />
    </div>
  );
}

export default App;
