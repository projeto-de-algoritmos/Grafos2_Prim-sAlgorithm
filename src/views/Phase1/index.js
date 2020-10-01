import React from 'react';
import Cell from '../../components/cell';

const Phase1 = () => {
  const createMatrix = () => {
    let width = Math.floor(window.innerWidth / 100);
    let height = Math.floor(window.innerHeight / 105);
    let matrix = [];
    let withNoHouse = [{ x: 0, y: 0 }, { x: 1, y: 1 }, 
      { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 1, y: 0 }, { x: 2, y: 0 },
     { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }];
    for(let i=0; i < width; i++){
      let aux = [];
      for(let j=0; j < height;j++){
        if (withNoHouse.find(item => item.x === i && item.y === j)){
          aux.push({home: true});
        } else {
          aux.push({home: false});
        }
      }
      matrix.push(aux);
    }

    return (
      <div style={{ width: '100%', display: 'flex', height: '95%' }}>
        {
          matrix.map((item, i) => 
            <div key={i}>
              {
                item.map((props,j) => {
                  if(props.home){
                    return <Cell color="white"/>
                  } else if(props.corner) {
                    return <Cell color = "orange"/>
                  } else {
                    return <Cell color="black"/>
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
      <h1 style={{ textAlign: 'center'}}>Fase 1</h1>
      <div style={{ height: '10%', width: '10%', display:'block' }}>
        {createMatrix()}
      </div>
    </div>
  );
}

export default Phase1;
