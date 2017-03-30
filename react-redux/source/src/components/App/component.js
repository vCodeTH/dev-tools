import React, { PropTypes } from 'react'
import logo from './assets/logo.svg'
import './assets/style.css'

const App = ({ children }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="App-intro">
      vCode Dev-Tools<br /><br />
      {children}
    </div>
  </div>
)

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
