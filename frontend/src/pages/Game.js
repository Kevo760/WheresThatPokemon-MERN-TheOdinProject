import React, { useState } from 'react';
import styled from 'styled-components';
import bg from '../images/bg.png'
import Timerbar from '../components/Timerbar';
import SelectionBox from '../components/SelectionBox';
import { useSelectBox } from '../hooks/useSelectBox';

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
  const {showSelectionBox, dispatch} = useSelectBox()

  const [xAxis, setXAxis] = useState(null);
  const [yAxis, setYAxis] = useState(null);


  const mouseClick = (e)=> {
    // Gets image div sizing
    const imgInfo = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;

    // Accurate position regardless of window size
    setXAxis(Math.round((offsetX / imgInfo.width) * 100));
    setYAxis(Math.round((offsetY / imgInfo.height) * 100));


    const position = {left: e.clientX + 5, top: e.clientY, bottom: imgInfo.bottom, right: imgInfo.right}
    dispatch({type: 'DISPLAY', payload: position})

  }



  return (
    <>
    <Timerbar />
    <GamePage >
        <img
          src={bg}
          alt='Game board'
          className="img-fluid"
          onClick={mouseClick}
        />

        {
          showSelectionBox &&
          <SelectionBox />
        }
        
    </GamePage>
    </>
  )
}
