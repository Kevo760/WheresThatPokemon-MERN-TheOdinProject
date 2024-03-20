import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal'; 
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useTimer } from '../hooks/useTimer';

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

const ScoreModal = () => {
  const { dispatchTimer } = useTimer()

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // dispatchTimer({type: 'STOP'})
  })

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
          <Modal.Header closeButton>
            <Modal.Title>Congratulation!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <b>You score is: </b>
          </Modal.Body>

          <Modal.Body>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Add your name"
                aria-label="name"
                aria-describedby="basic-addon1"
                id='name'
              />
            </InputGroup>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            <Button variant="primary">Understood</Button>
          </Modal.Footer>

        </Modal>
      </ModalForm>
    </Scoremodal> 
  )
}

export default ScoreModal