import React from 'react';

const Reset = (props) => {
  return (
    <button
      className="resetButton" onClick={props.onClick}>
      Reset
    </button>
  );
}

export default Reset;
