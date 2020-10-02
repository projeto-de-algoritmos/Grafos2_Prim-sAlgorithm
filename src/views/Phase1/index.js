import React from 'react';
import Cell from '../../components/cell';

const Phase1 = () => {
  const createMatrix = () => {
    let width = Math.floor(window.innerWidth / 100);
    let height = Math.floor(window.innerHeight / 100);
    console.log(width)
    height = height - (height % 3) + 1;
    width = width - (width % 3);

    let matrix = [];
    let house = 1;

    for (let i = 0; i < height; i++) {
      let aux = [];
      for (let j = 0; j < width; j++) {
        if (i == 0 || j == 0 || i >= height || j >= width - 1 || i % 2 === 0) {
          if (j === house && i > 0 && i < width - 1) {
            aux.push({ home: false, x: i, y: j, fire: false });
            house += 3;
          } else {
            aux.push({ home: true, x: i, y: j, fire: false });
          }
        } else {
          aux.push({ home: false, x: i, y: j, fire: false });
        }
      }
      house = 1;
      matrix.push(aux);
    }


    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        {
          matrix.map((item, i) =>
            <div style={{ display: "flex", flexDirection: 'row' }} key={i}>
              {
                item.map((cell, j) => {
                  return <Cell key={`${i}${j}`} color="white" cell={cell} />
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
