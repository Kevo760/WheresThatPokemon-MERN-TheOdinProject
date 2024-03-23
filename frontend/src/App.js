import './App.css';
import { SiteNav } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { Scores } from './pages/Scores';
import { SelectBoxProvider } from './context/SelectBoxContext';
import { MsgSelectProvider } from './context/MsgSelectContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteNav />
        <div className='pages'>
          <Routes>

            <Route
              path='/'
              element={<Home />} 
            />

            <Route
              path='/game'
              element={
                <SelectBoxProvider>
                  <MsgSelectProvider>
                    <Game />
                  </MsgSelectProvider>
                </SelectBoxProvider>
              } 
            />

            <Route
              path='/scores'
              element={<Scores />} 
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
