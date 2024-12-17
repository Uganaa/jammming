import React from "react";
import Track from "../Track/Track";

function Tracklist(props) {
  return (
    <div>
      {props.tracks.map((track) => {
        return <Track track={track} key={track.id} onAdd={props.onAdd} />;
      })}
    </div>
  );
}

export default Tracklist;
