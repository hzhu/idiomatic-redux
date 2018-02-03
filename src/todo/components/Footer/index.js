import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => (
  <p>
    <NavLink to='/all' activeClassName='b no-underline'>
      All
    </NavLink>
    {' '}
    <NavLink to='/active' activeClassName='b no-underline'>
      Active
    </NavLink>
    {' '}
    <NavLink to='/completed' activeClassName='b no-underline'>
      Completed
    </NavLink>
  </p>
)

export default Footer
