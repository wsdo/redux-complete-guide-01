import React from 'react'
import logo from './logo.svg'
import './App.css'
import { eat, hungry, eatAsync, getArticle} from './stark.redux'
import { connect } from 'react-redux'
class App extends React.Component {
  render () {
    const {num, eat, hungry , eatAsync, getArticle, list} = this.props
    return (
      <div className='App'>
          {list.map((item,index)=>{
            return <div key={index}>
              {item.title}
            </div>
          })}
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
          <button onClick={() => {eat()}}>
            吃了一坨山珍海味
          </button>
          <button onClick={() => {eatAsync()}}>
            等了一会，吃了一个煎饼
          </button>
          <button onClick={() => {hungry()}}>
            饿了一天
          </button>
          <button onClick={() => {getArticle()}}>
            获取文章
          </button>
        </header>
      </div>
    )
  }

}
// const mapStateToProps = (state)=>{
//   return {num:state}
// }

// const actionCreators = {eat,hungry}
export default connect((state)=>{
  return {num: state.num,list:state.list}
},{eat,hungry,eatAsync,getArticle})(App)
