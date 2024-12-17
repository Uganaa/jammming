import React, { useCallback } from "react";

function Track(props) {
  const { track, onRemove, onAdd } = props;
  const addTrack = useCallback(
    (event) => {
      onAdd(track);
    },
    [onAdd, track]
  );

  const removeTrack = useCallback(
    (event) => {
      onRemove(track);
    },
    [onRemove, track]
  );

  const renderAction = () => {
    if (props.isRemoval) {
      return <button onClick={removeTrack}>-</button>;
    }
    return <button onClick={addTrack}>+</button>;
  };

  return (
    <div>
      <h3>Song: {track.trackName}</h3>
      <p>Artist: {track.artist}</p>
      <p>Album: {track.album}</p>
      {renderAction()}
    </div>
  );
}

export default Track;
