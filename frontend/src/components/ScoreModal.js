import React, {useState} from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal'; 
import Button from 'react-bootstrap/Button'; 

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

const ModalBox = styled.div`
  height: fit-content;
  width: 400px;
  padding: 20;
  background-color: rgb(52, 58, 64);
`

const ScoreModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Scoremodal>
      <ModalBox>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          data-bs-theme="dark"
          className='text-light'
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Do not even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </ModalBox>
    </Scoremodal> 
  )
}

export default ScoreModal