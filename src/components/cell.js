import React from 'react';
import houseGif from '../assets/house.gif';
import fireGif from '../assets/fire.gif';

// import { Container } from './styles';

function Cell({ cell }) {
  console.log(cell)
  if (cell.home) {
    if (cell.fire) {
      return <img style={{ width: 100, height: 100, backgroundColor: "#00cc00" }} src={fireGif} />;
    } else {
      return <img style={{ width: 100, height: 100, backgroundColor: "#00cc00" }} src={houseGif} />;
    }
  } else {
    return <div style={{ width: 100, height: 100, backgroundColor: "#5c5c8a" }} />;
  }

}

export default Cell;