import React from 'react';
import styled from 'styled-components';


const ScorePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 480px;
  height: fit-content;
  color: white;
  background-color: rgb(52, 58, 64);
  border-radius: 6px;
  padding: 10px 10px 40px 10px;
  hr {
    background-color: #555;
    border: none;
    display: block;
    height: 2px;
    position: relative;
    width: 100%;
}
  `

  const InfoBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    width: 100%;
    padding: 0 14px;
    background-color: rgb(52, 58, 64);
    border-radius: 6px;
    .score-left-section {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 0;
      overflow: auto;
      width: 80%;
      gap: 20px;
    }
    .placing {
      width: 20%;
    }
    .username {
      width: 80%;
    }
    .timescore {
      width: 20%;
    }
  `

  const ScoreBar = styled(InfoBar)`
    background-color: rgba(108, 117, 125);
  `



export const Scores = () => {
  return (
    <ScorePage>
      <h1>Scores</h1>
      <InfoBar>
        <div className='score-left-section'>
          <div className='placing'>Placing</div>
          <div className='username'>Username</div>
        </div>
        
        <div className='timescore'>Time</div>
      </InfoBar>
      <hr></hr>
      <ScoreBar>
        <div className='score-left-section'>
          <div className='placing'>1st</div>
          <div className='username'>Username username username username username</div>
        </div>
        
        <div className='timescore'>123123123 seconds</div>
      </ScoreBar>


    </ScorePage>
  )
}
