import React from 'react';

// import { Container } from './styles';

function Cell({...props}) {
  return <div style={{width: 100, height: 100 , backgroundColor: props.color}}/>;
}

export default Cell;