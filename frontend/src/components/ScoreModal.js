import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal'; 
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useTimer } from '../hooks/useTimer';
import { useScoreData } from '../hooks/useScoreData';

const Scoremodal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const ModalForm = styled.form`
  height: fit-content;
  width: 400px;
  padding: 20;
  background-color: rgb(52, 58, 64);
`

const ErrText = styled.span`
  color: tomato;
`

const ScoreModal = () => {
  const { dispatchTimer } = useTimer();
  const { scoreID } = useScoreData();

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [username, setUsername] = useState('');
  const [finalScore, setFinalScore] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [submitLoading, setsubmitLoading] = useState(false);

  
  const [err, setErr] = useState('');
  const [backErr, setBackErr] = useState('')

  const handleSubmit = () => {
    // Regex for no spaces 3 to 10 characters
    const isValid = RegExp(/^\S{3,10}$/);
    setsubmitLoading(true)

    if(!isValid.test(username)) {

      setErr('Must be 3-10 characters and contain no spaces.')
      setsubmitLoading(false)
    } else {

      setErr(null)
      setsubmitLoading(false)
    }
  }

  useEffect(() => {
    dispatchTimer({type: 'STOP'});

    const setData = async() => {
      setIsLoading(true);


      console.log(scoreID)
      try {
        const res = await fetch(`/scores/${scoreID}`, {
          method:'PATCH'
        });

        const json = await res.json();


        if(!res.ok) {

          throw Error();
        }

        if(res.ok) {

          setFinalScore(json.timeScore);
          setIsLoading(false)
        }

      } catch(err) {

        setBackErr('Something went wrong, try again later.');
      }
    }

    setData()

  }, [dispatchTimer, scoreID])

  return (
    <Scoremodal>
      <ModalForm>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          data-bs-theme="dark"
          className='text-light test'
        >
          <Modal.Header className="d-flex justify-content-center align-items-center">
            <Modal.Title>Congratulation!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* if isLoading show loading spinner or show input */}
            {
              isLoading ?
              <Modal.Body className="d-flex justify-content-center align-items-center">
                
                {
                  backErr ?
                  <ErrText className="d-flex justify-content-center align-items-center">{backErr}</ErrText>
                  :
                  <Spinner animation="border" variant="primary"/>
                }
              </Modal.Body>
              :
              <>
              <Modal.Body className="d-flex justify-content-center align-items-center">
                <b>You score is: {finalScore}</b>
              </Modal.Body>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                      placeholder="Add your name"
                      aria-label="name"
                      aria-describedby="basic-addon1"
                      id='name'
                      autoComplete='off'
                      minLength={3}
                      maxLength={10}
                      pattern='^\S{3,10}$'
                      required={true}
                      onChange={e => setUsername(e.target.value)}
                  />
              </InputGroup>
            </>
            }

            {/* Show err when there is an error */}
            {
              err && <ErrText className="d-flex justify-content-center align-items-center">{err}</ErrText>
            }
          
          </Modal.Body>

          <Modal.Footer>
            {/* Show disabled loading button if loading */}
            {
              isLoading || submitLoading ?
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
              <Button variant="primary" type='button' onClick={handleSubmit}>Submit</Button>
            }
            
          </Modal.Footer>

        </Modal>
      </ModalForm>
    </Scoremodal> 
  )
}

export default ScoreModal