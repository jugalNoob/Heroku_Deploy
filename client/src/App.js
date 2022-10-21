import React from 'react'

import {Route} from "react-router-dom"

import Home from "./page/Home"

import Dapp from "./page/Dapp"

import Error from "./page/Error"

import Form from "./page/Form"

import Login from "./page/Login"

import Nav from "./page/Nav"

import Dash from './page/Dash'


function App() {
  return (
<div>
  <Nav/>

<Route exact path="/">

<Home/>
</Route>


<Route path="/error">
<Error/>
</Route>

<Route path="/dapp">
<Dapp/>

</Route>

<Route path="/login">

<Login/>
</Route>


<Route path="/form">

<Form/>
</Route>

<Route path="/dash">

<Dash/>

</Route>

    </div>
  )
}

export default App
