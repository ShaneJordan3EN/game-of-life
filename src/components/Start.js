import React from 'react';

const Start = (props) => {
  return (
    <button
      className="startButton" onClick={props.onClick}>
      Start
    </button>
  );
}

export default Start;
