import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// reducer
const weight = (state = 160, action) => {
    switch (action.type) {
        case 'eat':
            return state + 10
        case 'hungry':
            return state - 10
        default:
            return 160
    }
}

const store = createStore(weight)


const watch = () => {
    const cur = store.getState()
    console.log(`stark wang 现在体重为${cur}斤`)
}

store.subscribe(watch)
// watch()


store.dispatch({type:'eat'})

store.dispatch({type:'eat'})

store.dispatch({type:'eat'})

store.dispatch({ type: 'hungry' })



// console.log(store.getState())

// store.dispatch({ type: 'eat' })
// console.log('我吃了一些事物')
// console.log(store.getState())

// console.log('我饿了好几天')
// store.dispatch({ type: 'hungry' })
// console.log(store.getState())
// console.log('我又饿了好几天')
// store.dispatch({ type: 'hungry' })
// console.log(store.getState())

