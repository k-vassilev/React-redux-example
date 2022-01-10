import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux';


//STORE -> GOBALIZED STATE - globalized state, holding the data used throughout the whole application

//ACTION INCREMENT - Describes what we want to do with regard to the state; A function which returns an object
const increment = () => {
	return {
		type: 'INCREMENT',
	}
}

const decrement = () => {
	return {
		type: 'DECREMENT',
	}
}

//REDUCER - Describes how the actions transform the state into the next state ; modifies store based on the chosen action
const counter = (state = 0, action) => {
	switch(action.type){
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
	}
}

let store = createStore(counter);

//Display in console
store.subscribe(() => console.log(store.getState()));

//DISPATCH - rigger. Action is dispatched to the reducer, reducer determines how to affect the state and then acts on it.
store.dispatch(increment());

ReactDOM.render(<App />,document.getElementById('root'));
