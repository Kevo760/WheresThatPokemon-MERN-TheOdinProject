import React, { useState } from 'react';
import styled from 'styled-components';

const TimerbarBox = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    top: 80px;
    height: 80px;
    width: 100%;
    max-width: 400px;
    padding: 10px;
    color: white;
    background-color: rgb(52, 58, 64);
    border-radius: 6px;
    overflow: hidden;
    z-index: 1;
    p {
        margin: 0;
        padding: 0;
    }
    .icon-status {
        display: flex;
        flex-direction: row;
    }
    .icon-status img {
        margin-right: -20px;
    }
    hr {
        width: 10%;
        transform: rotate(90deg);
    }
    .test {
      opacity: 50%;
    }
`

const Timerbar = () => {
  const [char1, setChar1] = useState(1);
  const [char2, setChar2] = useState(1);
  const [char3, setChar3] = useState(1);

  const foundChar = (char) => {
    if(1) {
      setChar1(.5)
    } else if(2) {
      setChar2(.5)
    } else if(3) {
      setChar3(.5)
    } else return

  }

  return (
    <TimerbarBox>
        <div className='icon-status'>
          <img src="https://img.pokemondb.net/sprites/black-white/normal/galvantula.png" alt="Galvantula" className='test' style={{ opacity: char1 }}/>
          <img src="https://img.pokemondb.net/sprites/black-white/normal/darumaka.png" alt="Darumaka" style={{ opacity: char2 }}/>
          <img src="https://img.pokemondb.net/sprites/black-white/normal/spearow.png" alt="Spearow" style={{ opacity: char3 }}/>
        </div>
        <hr></hr>
        <p className='time-text'>Time: <span>100(s)</span></p>
    </TimerbarBox>
  )
}

export default Timerbar