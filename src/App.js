import React from 'react'
import logo from './logo.svg'
import './App.css'
import { eat, hungry } from './stark.redux'

class App extends React.Component {
  render () {
    const store = this.props.store
    const num = store.getState()
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            【redux完全指南】系列1：从入门到会用
            <br></br>
            hi gusy， I am stark
          </p>
          <a
            className='App-link'
            href='https://shudong.wang'
            target='_blank'
            rel='noopener noreferrer'>跟着stark wang 学redux</a>
          <h2>stark wang 当前的体重为{num}斤</h2>
          <button onClick={() => {store.dispatch(eat())}}>
            吃了一坨山珍海味
          </button>
          <button onClick={() => {store.dispatch(hungry())}}>
            饿了一天
          </button>
        </header>
      </div>
    )
  }

}

export default App
