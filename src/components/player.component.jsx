import React from 'react';
import PlayerDetails from './player-Details.component';
import PlayerControls from './player-Controls.component';

function player(props) {
  return (
    <div className="c-player"> 
      <audio></audio>
      <h4>Playing Now</h4>
      <PlayerDetails song={props.song}/>
      <PlayerControls/>
  <p><strong>Next up:</strong>{props.nextSong.title} by {props.nextSong.artist}</p>
    </div>
  )
}

export default player
