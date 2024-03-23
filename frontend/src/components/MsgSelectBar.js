import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
    0% {
        opacity: 0;
    }
    14% {
      opacity: 1;
    }
    
    86% {
        opacity: 1;
    }
  
    100% {
      opacity: 0;
    }
`

const FoundBar = styled.div`
    opacity: 0;
    width: 240px;
    height: 40px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    top: 50%;
    color: white;
    background-color: green;
    border: 1px solid darkgreen;
    border-radius: 6px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    animation: ${fadeInOut} linear 1s;
`

const NotFoundBar = styled(FoundBar)`
    background-color: tomato;
    border: 1px solid red;
`


const MsgSelectBar = (props) => {
    const {status} = props

  return (
    <>
    {
        status ?
        <FoundBar>
            You found the Pokemon!
        </FoundBar>
        :
        <NotFoundBar>
            Wrong Pokemon.
        </NotFoundBar>
    }
    </>
  )
}

export default MsgSelectBar