import React from 'react'
import logo from './assets/logo.svg'
import './style.css'
import Example from '../Example'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="App-intro">
      vCode Dev-Tools<br /><br />
      <Example />
    </div>
  </div>
)

export default App
