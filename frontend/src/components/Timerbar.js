import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTimer } from '../hooks/useTimer';
import { useCharacterIcon } from '../hooks/useCharacterIcon';
import { converTimeMMSSMS } from '../functions/convertTime';


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
    .time-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`

const Timerbar = () => {
  const [char1, setChar1] = useState(1);
  const [char2, setChar2] = useState(1);
  const [char3, setChar3] = useState(1);

  const {spearow, darumaka, galvantula} = useCharacterIcon();
  const { time } = useTimer();


  let mmssms = converTimeMMSSMS(time)

  useEffect(() => {

    const checkForFoundCharacters = () => {
      if(galvantula) {
        setChar1(.5)
      } else if(darumaka) {
        setChar2(.5)
      } else if(spearow) {
        setChar3(.5)
      } else return
    }

    checkForFoundCharacters()
    
  }, [spearow, darumaka, galvantula])
  
  
  return (
    <TimerbarBox>
        <div className='icon-status'>
          <img src="https://img.pokemondb.net/sprites/black-white/normal/galvantula.png" alt="Galvantula" className='test' style={{ opacity: char1 }}/>
          <img src="https://img.pokemondb.net/sprites/black-white/normal/darumaka.png" alt="Darumaka" style={{ opacity: char2 }}/>
          <img src="https://img.pokemondb.net/sprites/black-white/normal/spearow.png" alt="Spearow" style={{ opacity: char3 }}/>
        </div>
        <hr></hr>
        <div className='time-box'>
          <p>Estimated Time:</p>
          <p className='time-text'>{mmssms}</p>
        </div>
        
    </TimerbarBox>
  )
}

export default Timerbar