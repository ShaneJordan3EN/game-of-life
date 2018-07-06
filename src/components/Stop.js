import React from 'react';

const Start = (props) => {
  return (
    <button
      className="stopButton" onClick={props.onClick}>
      Stop
    </button>
  );
}

export default Start;
