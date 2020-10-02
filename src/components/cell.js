import React from 'react';
import houseGif from '../assets/house.gif';
import fireGif from '../assets/fire.gif';
import truckGif from '../assets/fireTruck.gif';

// import { Container } from './styles';

function Cell({ cell }) {
  if (cell.home) {
    if (cell.fire) {
      return <img style={{ width: 100, height: 100, backgroundColor: "#00cc00" }} src={fireGif} />;
    } else {
      return <img style={{ width: 100, height: 100, backgroundColor: "#00cc00" }} src={houseGif} />;
    }
  } else {
    if ( cell.current ){
      return <img style={{ width: 100, height: 100, backgroundColor: "#5c5c8a" }} src={truckGif} />;
    } else {
      return <div style={{ width: 100, height: 100, backgroundColor: "#5c5c8a" }} />;
    }
  }

}

export default Cell;