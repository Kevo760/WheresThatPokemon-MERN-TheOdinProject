import React from 'react';
import styled from 'styled-components'

const NavBar = styled.nav`
   box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
   .navbar-brand {
    font-weight: bold;
   }
   .yellow {
    color: rgb(252, 163, 17);
   }
`

export const SiteNav = () => {
  return (
    <NavBar className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Where's That <span className='yellow'>Pokemon?</span></a>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Scores</a>
                </li>
            </ul>
            </div>
        </div>
    </NavBar >
  )
}
 
