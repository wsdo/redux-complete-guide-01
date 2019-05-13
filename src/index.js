import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { weight } from './stark.redux'
import { Provider } from 'react-redux'
import { applyMiddleware } from 'redux';
const store = createStore(weight)

// const render = () =>{

ReactDOM.render(
	(
		<Provider store={store} >
			<App />
		</Provider>
	),
	document.getElementById('root')
);
// }
// render()

// store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

