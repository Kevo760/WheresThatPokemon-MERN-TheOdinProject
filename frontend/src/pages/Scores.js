import React from 'react';
import styled from 'styled-components';


const ScorePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 480px;
  height: fit-content;
  color: white;
  background-color: rgb(52, 58, 64);
  border-radius: 6px;
  padding: 8px 6px;
  gap: 10px;
  .table {
    border-radius: 6px;
  }
  `

export const Scores = () => {
  return (
    <ScorePage>
      <h1>Scores</h1>

      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </table>

    </ScorePage>
  )
}
