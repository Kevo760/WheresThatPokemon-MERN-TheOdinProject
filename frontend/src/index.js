import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ScoreDataProvider } from './context/ScoreDataContext';
import { CharacDataProvider } from './context/CharacDataContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScoreDataProvider>
      <CharacDataProvider>
        <App />
      </CharacDataProvider>
    </ScoreDataProvider>
  </React.StrictMode>
);


