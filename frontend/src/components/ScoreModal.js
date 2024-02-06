import React from 'react';
import styled from 'styled-components';

const ModalTop = styled.div`

`

const ModalBottom = styled.div`

`

const ScoreModal = () => {
  return (
    <>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Launch static backdrop modal
    </button>


    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content text-white bg-dark" data-bs-theme="dark">
          <ModalTop>
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Congrats, you did it!</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </ModalTop>
          <div className="modal-body">
            ...
          </div>
          <ModalBottom>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Understood</button>
          </ModalBottom>
        </div>
      </div>
    </div>
    </>
  )
}

export default ScoreModal