import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';
import { converTimeHHMMSS } from '../functions/convertTime';


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
  .error-text {
    margin-top: 20px;
    color: tomato;
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
      width: 25%;
    }
  `

  const ScoreBar = styled(InfoBar)`
    background-color: rgba(108, 117, 125);
    margin-bottom: 10px;
  `



export const Scores = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scores, setScores] = useState();

  const scoreData = 
  scores ? 
  scores
  .sort((a, b) => a.timeScore - b.timeScore)
  : 
  null


  useEffect(() => {

    const fetchScores = async() => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(`/scores`, {
          method: 'GET'
        })

        const json = await res.json();

        if(!res.ok) {

          throw Error();
        }

        if(res.ok) {

          setScores(json);
          setIsLoading(false);
          setError(null);
        }

      } catch(err) {
        setError('Something went wrong, try again')
      } 
    }

    fetchScores()

  }, [])

  return (
    <ScorePage>

      <h1>Scores</h1>

      <InfoBar>
        <div className='score-left-section'>
          <div className='placing'>Placing</div>
          <div className='username'>Username</div>
        </div>
        
        <div className='timescore'>Time(hh:mm:ss)</div>
      </InfoBar>

      <hr></hr>

      {
        isLoading &&
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }

      {
        scores &&
        scoreData.map((score, index) => {
          return (
          <ScoreBar key={index}>
            <div className='score-left-section'>
              <div className='placing'>{index + 1}</div>
              <div className='username'>{score.username}</div>
            </div>
            
            <div className='timescore'>{ converTimeHHMMSS(score.timeScore)}</div>
          </ScoreBar>
          )
        })
      }

      {
        error && <span className='error-text'>{error}</span>
      }

    </ScorePage>
  )
}
