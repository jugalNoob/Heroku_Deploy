import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <NavLink to="/">home</NavLink>
      <br />
      <br />
      <NavLink to="/dapp">dapp</NavLink>
      <br />
      <br />
      <NavLink to="/login">login</NavLink>
      <br />
      <br />
      <NavLink to="/form">form</NavLink>
      <br />
      <br />
      <NavLink to="/error">error</NavLink>
    </div>
  )
}

export default Home
