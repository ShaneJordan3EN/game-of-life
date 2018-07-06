import React from 'react';
import { Button } from 'semantic-ui-react';

const GridButton = (props) => {
  return (
    <button className="gridButton" onClick={props.onClick}>{props.gridSize}</button>
  )
}

export default GridButton;
