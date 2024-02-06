import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  z-index: 2;
   box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
   .navbar-brand {
    font-weight: bold;
   }
   .yellow {
    color: rgb(252, 163, 17);
   }
   .nav-item {
    text-align: center;
   }
`

export const SiteNav = () => {


  return (
    <NavBar className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Where's That <span className='yellow'>Pokemon?</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/scores">Scores</a>
              </li>
            </ul>
          </div>
        </div>
    </NavBar >
  )
}
 
