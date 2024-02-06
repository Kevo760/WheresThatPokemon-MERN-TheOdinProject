import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 480px;
  height: 350px;
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
    background-color: rgb(20, 33, 61);
    color: white;
    font-weight: bold;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
  button:hover {
    background-color: rgb(58, 95, 176);
  }
  button:active {
    background-color: rgb(20, 33, 61);
  }
`


export const Home = () => {

  const navigate = useNavigate()

  const handleSubmit= (e) => {
    e.preventDefault();
    navigate('/game')
  }

  return (
    <HomePage onClick={handleSubmit}>
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
      
      <button>Start Game</button>
    </HomePage>
  )
}
