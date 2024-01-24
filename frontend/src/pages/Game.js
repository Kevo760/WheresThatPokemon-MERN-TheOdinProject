import React, { useState } from 'react';
import styled from 'styled-components';
import bg from '../images/bg.png'

const GamePage = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  background-color: black;
`


export const Game = () => {
  const [xAxis, setXAxis] = useState(null);
  const [yAxis, setYAxis] = useState(null);

  const mouseClick = (e)=> {
    const { width, height } = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;

    setXAxis(Math.round((offsetX / width) * 100));
    setYAxis(Math.round((offsetY / height) * 100));
    console.log(xAxis, yAxis);
  }

  return (
    <GamePage>
      <div className='gameboard' onClick={mouseClick}>
        <img
          src={bg}
          alt='Game board image'
          className="img-fluid"
        />
      </div>
    </GamePage>
  )
}
