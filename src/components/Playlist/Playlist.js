import React, { useCallback } from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist(props) {
  const handleNameChange = useCallback((event) => {
    props.onNameChange(event.target.value);
  },[props.onNameChange]);

  return (
    <div>
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <Tracklist
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button onClick={props.onSave}>Save Playlist</button>
    </div>
  );
}

export default Playlist;
