import React from 'react';

const Square = (props) => {
  let id = "inactive";
  if (props.value === 1) {
    id = "active";
  }
  return (
    <button
      className={id} onClick={props.onClick}>
    </button>
  );
}

export default Square;
