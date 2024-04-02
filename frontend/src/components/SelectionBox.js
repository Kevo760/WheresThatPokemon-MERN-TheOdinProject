import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelectBox } from '../hooks/useSelectBox';
import { useCharacSelect } from '../hooks/useCharacSelect';
import { useCharacData } from '../hooks/useCharacData';
import { useMsgSelect } from '../hooks/useMsgSelect';
import { useCharacterIcon } from '../hooks/useCharacterIcon';

const Selectionbox = styled.div`
  left: ${props => props.$setleft + "px"};
  top: ${props => props.$settop + "px" };
  position: fixed;
  width: 120px;
  height: fit-content;
  background-color: rgba(33, 37, 41);
  border-radius: 4px;
  padding: 2px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  .selection-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 30px;
    font-weight: bold;
    overflow: hidden;
    cursor: pointer;
  }
  .selection-bar:not(:last-of-type) {
      border-bottom: black .1rem solid;
    }
  .selection-bar:hover {
    background-color: rgb(252, 163, 17);
  }
  .selection-bar img {
    margin-left: 8px;
    height: 80px;
    z-index: 1;
  }
  .selection-bar span {
    width: 50%;
    z-index: 2;
    margin-left: 4px;
  }
`

const SelectionBox = () => {
  const [leftLocation, setLeftLocation] = useState();
  const [topLocation, setTopLocation] = useState();
  const {selectionStyle, dispatchShowSelection} = useSelectBox();
  const { x, y } = useCharacSelect();
  const { spearow, darumaka, galvantula } = useCharacData();
  const { dispatchMsgSelect } = useMsgSelect();
  const { dispatchCharacterIcon } = useCharacterIcon();

  const { top, left, bottom, right } = selectionStyle;

  // Checks cordinates by passing character object
  const checkCord = (characObject) => {
    const name = characObject.name;

    // Grabs the position array
    const xArray = characObject.xAxis;
    const yArray = characObject.yAxis;

    // Itirates through array to find a match
    const checkX = () => {
      for(let i = 0; i < xArray.length; i++) {
        if(xArray[i] === x) {
            
          return true
        } 
      }
      return false
    }

    // Itirates through array to find a match
    const checkY = () => {
      for(let j = 0; j < yArray.length; j++) {
        if(yArray[j] === y ) {

          return true
        }
      }
      return false
    }

    // passes the check if true or false
    let foundX = checkX();
    let foundY = checkY();

    
    // If x and y are true return characterIcon true and show found message
    if(foundX && foundY) {

      dispatchCharacterIcon({type: name});
      dispatchMsgSelect({type: 'SHOW_FOUND'});
    } else {

      dispatchMsgSelect({type: 'SHOW_NOT_FOUND'});
    }
  }


  const handleClick = (character) => {

    if(character === 'spearow') {

      checkCord(spearow)
    } else if(character === 'darumaka') {

      checkCord(darumaka)
    } else if(character === 'galvantula') {

      checkCord(galvantula)
    }

    
    dispatchShowSelection({type: 'HIDE'})
  }


  
  useEffect(() => {
    
    const checkOffBorders = () => {
      // Find image limit to where select box does not go outside image boundries
      const rightBorderLimit = right - 120;
      const bottomBorderLimit = bottom - 100;

      if(top > bottomBorderLimit && left > rightBorderLimit) {
        setTopLocation(top - 90)
        setLeftLocation(left - 130)
      } else if(top > bottomBorderLimit) {
        setTopLocation(top - 90)
        setLeftLocation(left)
      } else if(left > rightBorderLimit) {
        setTopLocation(top)
        setLeftLocation(left - 130)
      } else {
        setTopLocation(top)
        setLeftLocation(left)
      }
    }

    checkOffBorders();
  }, [top, left, bottom, right])

  return (
    <Selectionbox $settop={topLocation} $setleft={leftLocation}>
      <div className='selection-bar'onClick={e => handleClick('galvantula')}>
        <span>Galvantula</span>
        <img src="https://img.pokemondb.net/sprites/black-white/normal/galvantula.png" alt="Galvantula" />
      </div>
      <div className='selection-bar' onClick={e => handleClick('darumaka')}>
        <span>Darumaka</span>
        <img src="https://img.pokemondb.net/sprites/black-white/normal/darumaka.png" alt="Darumaka" />
      </div>
      <div className='selection-bar' onClick={e => handleClick('spearow')}>
        <span>Spearow</span>
        <img src="https://img.pokemondb.net/sprites/black-white/normal/spearow.png" alt="Spearow" />
      </div>
    </Selectionbox>
  )
}

export default SelectionBox