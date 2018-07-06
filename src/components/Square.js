import React from 'react';

const Square = (props) => {
  return (
    <button
      className="square" onClick={props.onClick} x={props.x} y={props.y}>
      {props.value}
    </button>
  );
}

export default Square;
