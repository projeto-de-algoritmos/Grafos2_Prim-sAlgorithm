import React, { Component, useEffect } from 'react';
import Cell from '../../components/cell';

/* const Phase1 = () => {


  useEffect(() => {
    const timer = setInterval(() => {
      refresh = true;
      let choosed = houses[Math.floor(Math.random() * houses.length)];
      matrix[choosed.x][choosed.y].fire = true;
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const createMatrix = () => {
    for (let i = 0; i < height; i++) {
      let aux = [];
      for (let j = 0; j < width; j++) {
        if (i == 0 || j == 0 || i >= height || j >= width - 1 || i % 2 === 0) {
          if (j === house && i > 0 && i < width - 1) {
            aux.push({ home: false, x: i, y: j, fire: false, current: false });
            house += 3;
          } else {
            houses.push({ home: true, x: i, y: j, fire: false, current: false });
            aux.push({ home: true, x: i, y: j, fire: false, current: false });
          }
        } else {
          aux.push({ home: false, x: i, y: j, fire: false, current: false });
        }
      }
      house = 1;
      matrix.push(aux);
    }

    C = matrix[1][1];
    C.current = true;

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
      <div>
        {refresh ? null : createMatrix()}
      </div>
    </div>
  );
} */


class Phase1 extends React.Component {

  constructor(props) {
    super(props);
    const width = Math.floor(window.innerWidth / 100);
    const height = Math.floor(window.innerHeight / 100);
    this.state = {
      height: height - (height % 3) + 1,
      width: width - (width % 3),
      houses: [],
      C: "",
      matrix: [],
      interval: ""
    }
  }

  componentDidMount() {
    const { width, height } = this.state;
    let matrix = [];
    let house = 1;
    let C;
    let houses = [];

    for (let i = 0; i < height; i++) {
      let aux = [];
      for (let j = 0; j < width; j++) {
        if (i == 0 || j == 0 || i >= height || j >= width - 1 || i % 2 === 0) {
          if (j === house && i > 0 && i < width - 1) {
            aux.push({ home: false, x: i, y: j, fire: false, current: false });
            house += 3;
          } else {
            houses.push({ home: true, x: i, y: j, fire: false, current: false });
            aux.push({ home: true, x: i, y: j, fire: false, current: false });
          }
        } else {
          aux.push({ home: false, x: i, y: j, fire: false, current: false });
        }
      }
      house = 1;
      matrix.push(aux);
    }

    C = matrix[1][1];
    C.current = true;

    this.setState({
      matrix,
      C,
      houses
    })

    var interval = setInterval(this.selectRandomHouse, 1000);
    this.setState({ interval: interval });
  }

  componentWillUnmount = () => {
    const { interval } = this.state;
    clearInterval(interval);
  }

  selectRandomHouse = () => {
    const { matrix, houses } = this.state;
    let newMatrix = matrix;

    let choosed = houses[Math.floor(Math.random() * houses.length)];
    newMatrix[choosed.x][choosed.y].fire = true;

    this.setState({
      matrix: newMatrix
    })
  }


  createMatrix = () => {
    const { matrix } = this.state;

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


  render() {
    return (
      <div>
        <div>
          {this.createMatrix()}
        </div>
      </div>
    );
  }
}

export default Phase1;