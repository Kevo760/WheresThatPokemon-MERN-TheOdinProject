import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useScoreData } from '../hooks/useScoreData';
import { useCharacData } from '../hooks/useCharacData';

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 480px;
  height: fit-content;
  color: white;
  background-color: rgb(52, 58, 64);
  border-radius: 6px;
  padding: 20px;
  gap: 20px;
  .home-textbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .home-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .iconbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: fit-content;
  }
  button {
    margin: 10px auto;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 6px;
    color: white;
    font-weight: bold;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
  button:hover {
    background-color: rgb(58, 95, 176);
  }
  .error-box {
    text-align: center;
    height: fit-content;
    width: 100%;
    color: tomato;
  }
`


export const Home = () => {

  const navigate = useNavigate();
  const [ isLoading, setIsLoading ] = useState(false);
  const [err, setErr] = useState(null);
  const { scoreID, scoreError, dispatchScoreData } = useScoreData();
  const { charError, spearow, darumaka, galvantula, dispatchCharacData } = useCharacData();

  
  const handleSubmit = () => {

    setIsLoading(true);

    if(!scoreID) {
      dispatchScoreData({ type: 'GET_SCORE' });
      dispatchCharacData({type: 'GET_DATA'});
    } 

  }

  useEffect(() => {

    const checkData = () => {

      if(scoreError && charError) {

        setErr(scoreError + ',' + charError);
        dispatchScoreData({ type: 'DELETE_DATA' });
        dispatchCharacData({type: 'DELETE_DATA'});
        setIsLoading(false);
      } else if(scoreError) {

        setErr(scoreError);
        dispatchScoreData({ type: 'DELETE_DATA' });
        setIsLoading(false);
      } else if(charError) {

        setErr(charError);
        dispatchCharacData({type: 'DELETE_DATA'});
        setIsLoading(false);
      }


      if(scoreID && spearow && darumaka && galvantula) {
        navigate('/game');
      }
    }
    
    checkData()

  }, [scoreID, spearow, darumaka, galvantula, charError, scoreError])

  return (
    <HomePage>
      <div className='home-textbox'>
        <h1>Welcome Player!</h1>
        <p>Find how fast you can find the pokemon below.</p>
      </div>
      <div className='home-icons'>

      <div className='iconbox'>
          <img src="https://img.pokemondb.net/sprites/black-white/normal/galvantula.png" alt="Galvantula" />
          <p>Galvantula</p>
        </div>
        <div className='iconbox'>
          <img src="https://img.pokemondb.net/sprites/black-white/normal/darumaka.png" alt="Darumaka" />
          <p>Darumaka</p>
        </div>

        <div className='iconbox'>
          <img src="https://img.pokemondb.net/sprites/black-white/normal/spearow.png" alt="Spearow" />
          <p>Spearow</p>
        </div>

      </div>
      
      {
        isLoading ?
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
        </Button>
        :
        <Button variant="primary" onClick={e => handleSubmit()}>
            Start Game
        </Button>
      }

      {
        err 
        && 
        <div className='error-box'>
          <span>{err}</span>
        </div>
      }
      
    </HomePage>
  )
}
