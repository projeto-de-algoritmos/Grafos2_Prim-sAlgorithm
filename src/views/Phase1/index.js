import React from 'react';
import Cell from '../../components/cell';

const Phase1 = () => {
  const createMatrix = () => {
    let width = Math.floor(window.innerWidth / 100);
    let height = Math.floor(window.innerHeight / 100);
    console.log(width, height);
    width = (width - 2) - (width % 4) + 3
    height = (height - 2) - (height % 2) + 3
    console.log(width, height);
 
    let matrix = [];
    let acc = 0;
    let spaces = Math.floor(width/4);

    for (let i = 0; i < width; i++) {
      let aux = [];
      for (let j = 0; j < height; j++) {
        if (i == 0 || j == 0 || i == width - 1 || j == height - 1) {
          aux.push({ home: true });
        } else {
          aux.push({ home: false });
        }
      }
      matrix.push(aux);
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {
          matrix.map((item, i) =>
            <div key={i}>
              {
                item.map((props, j) => {
                  if (props.home) {
                    return <Cell key={`${i}${j}`} color="white" />
                  } else if (props.corner) {
                    return <Cell key={`${i}${j}`} color="orange" />
                  } else {
                    return <Cell key={`${i}${j}`} color="black" />
                  }
                })
              }
            </div>
          )
        }
      </div>
    )
  }
  return (
    <div>
      {/* <h1 style={{ textAlign: 'center'}}>Fase 1</h1> */}
      <div>
        {createMatrix()}
      </div>
    </div>
  );
}

export default Phase1;
