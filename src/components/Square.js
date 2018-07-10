import React from 'react';

const Square = (props) => {
  let id = "inactive square";
  if (props.value === 1) {
    id = "active square";
  }
  console.log(props.squareDiameter);
  const diameterString = props.squareDiameter + "px";
  const squareStyle = {
    height: diameterString,
    width: diameterString
  }

  console.log(diameterString);
  return (
    <button
      style = {squareStyle}
      className={id} onClick={props.onClick}>
    </button>
  );
}

export default Square;
