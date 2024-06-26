import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import bg from '../images/bg.png'
import Timerbar from '../components/Timerbar';
import SelectionBox from '../components/SelectionBox';
import { useSelectBox } from '../hooks/useSelectBox';
import { TimerProvider } from '../context/TimerContext';
import ScoreModal from '../components/ScoreModal';
import MsgSelectBar from '../components/MsgSelectBar';
import { useMsgSelect } from '../hooks/useMsgSelect';
import { useNavigate } from 'react-router-dom';
import { useScoreData } from '../hooks/useScoreData';
import { useCharacData } from '../hooks/useCharacData';
import { useCharacSelect } from '../hooks/useCharacSelect';
import { useCharacterIcon } from '../hooks/useCharacterIcon';



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

export const Game = () => {
  const {showSelectionBox, dispatchShowSelection} = useSelectBox();
  const { showMsg, found } = useMsgSelect();
  const { scoreID } = useScoreData();
  const { spearow, darumaka, galvantula } = useCharacData();
  const { dispatchCharacSelect } = useCharacSelect();
  const { spearowFound, darumakaFound, galvantulaFound } = useCharacterIcon();

  const navigate = useNavigate();

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

    const checkAllFound = () => {
      if(spearowFound && darumakaFound && galvantulaFound) {
       
        setShowScoreModal(true);
      }
    }

    const checkData = () => {

      // Checks if all data is loaded if not return to main menu
      if(!scoreID || !spearow || !darumaka || !galvantula) {

        navigate('/')
      }
    }
    
    checkData()
    checkAllFound()

  },[scoreID, spearow, darumaka, galvantula, charError, scoreError, dispatchCharacData, dispatchScoreData, navigate])

  return (
    <>
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
    </>
  )
}
