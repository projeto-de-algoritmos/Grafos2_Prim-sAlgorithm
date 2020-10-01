import React from 'react';
import Cell from '../../components/cell';

const Phase1 = () => {
  const createMatrix = () => {
    let width = Math.round(window.innerWidth / 100);
    let height = Math.round(window.innerHeight / 100);
    let widthArray = Array.from(Array(width).keys());
    let heightArray = Array.from(Array(height).keys());
    return (
      <div style={{ width: '100%', display: 'flex', height: '95%' }}>
        {
          widthArray.map((row, i) => (
            <div key={i}>
              {heightArray.map((col, j) => (
                <Cell />
              ))}
            </div>
          ))
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
