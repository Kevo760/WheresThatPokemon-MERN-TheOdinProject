import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import bg from '../images/bg.png'
import Timerbar from '../components/Timerbar';
import SelectionBox from '../components/SelectionBox';
import { useSelectBox } from '../hooks/useSelectBox';
import { TimerProvider } from '../context/TimerContext';
import { CharacterIconProvider } from '../context/CharacterIconContext';
import ScoreModal from '../components/ScoreModal';
import Spinner from 'react-bootstrap/Spinner';
import MsgSelectBar from '../components/MsgSelectBar';
import { MsgSelectProvider } from '../context/MsgSelectContext';
import { useMsgSelect } from '../hooks/useMsgSelect';
import { useNavigate } from 'react-router-dom';
import { useScoreData } from '../hooks/useScoreData';
import { useCharacData } from '../hooks/useCharacData';
import { useCharacSelect } from '../hooks/useCharacSelect';


const GamePage = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: black;
  margin-top: 100px;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`

const LoadingBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
`


export const Game = () => {
  const {showSelectionBox, dispatchShowSelection} = useSelectBox();
  const { showMsg, found } = useMsgSelect();
  const { scoreID } = useScoreData();
  const { spearow, darumaka, galvantula } = useCharacData();
  const navigate = useNavigate();
  const { dispatchCharacSelect } = useCharacSelect();

  const [showScoreModal, setShowScoreModal] = useState(false);




  const mouseClick = (e)=> {
    // Gets image div sizing
    const imgInfo = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;

    // Accurate position regardless of window size
    let x = Math.round((offsetX / imgInfo.width) * 100);
    let y = Math.round((offsetY / imgInfo.height) * 100);

  
    const position = {left: e.clientX + 5, top: e.clientY, bottom: imgInfo.bottom, right: imgInfo.right}
    dispatchShowSelection({type: 'DISPLAY', payload: position});
    dispatchCharacSelect({type: 'SET_CORD', payload: {x, y}})

  }

  useEffect(() => {

    const checkData = () => {

      // Checks if all data is loaded if not return to main menu
      if(!scoreID || !spearow || !darumaka || !galvantula) {

        navigate('/')
      }
    }

    checkData()
    
  },[scoreID, spearow, darumaka, galvantula])

  return (
    <>
      <CharacterIconProvider>
        <TimerProvider>
              <>
                <Timerbar />

                {
                  showScoreModal && <ScoreModal />
                }

                <GamePage >
                  <img
                    src={bg}
                    alt='Game board'
                    className="img-fluid"
                    onClick={mouseClick}
                  />

                  {
                    showSelectionBox &&
                    <SelectionBox />
                  }

                  { showMsg &&  <MsgSelectBar status={found} />}
                  </GamePage>

              </>
        </TimerProvider>
      </CharacterIconProvider>
    </>
  )
}
