import React, { useState } from 'react';
import styled from 'styled-components';
import bg from '../images/bg.png'
import Timerbar from '../components/Timerbar';
import SelectionBox from '../components/SelectionBox';

const GamePage = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: black;
  margin-top: 100px;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`


export const Game = () => {
  const [xAxis, setXAxis] = useState(null);
  const [yAxis, setYAxis] = useState(null);
  const [imgClient, setImgClient] = useState(null)
  const [selectBoxStyle, setSelectBoxStyle] = useState({
    left: 0,
    top: 0,
    display: "none"
  })

  const mouseClick = (e)=> {
    // Gets image div sizing
    const imgInfo = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;


    setImgClient(imgInfo)
    setXAxis(Math.round((offsetX / imgInfo.width) * 100));
    setYAxis(Math.round((offsetY / imgInfo.height) * 100));

    setCordinates(e.clientX, e.clientY)
  }

  // Sends style to page
  const setCordinates = (x,y) => {
    setSelectBoxStyle({
      left: `${x + 5}`,         
      top:  `${y}`,
      display: "block"
    })
  }

  return (
    <>
    <Timerbar />
    <GamePage onClick={mouseClick}>
        <img
          src={bg}
          alt='Game board'
          className="img-fluid"
        />

        <SelectionBox selectBoxStyle={selectBoxStyle} imgClient={imgClient}/>
    </GamePage>
    </>
  )
}
