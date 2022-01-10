import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() {
	const counter = useSelector(state => state.counter);
	const isLogged = useSelector(state =>state.isLogged);
	const dispatch = useDispatch();

  	return (
    	<div>
   			<h1>Counter: {counter}</h1>
			   <button onClick={() => dispatch(increment())}>Increment +</button>
			   <button onClick={() => dispatch(decrement())}>Decrement -</button>
			   <br></br>
			{isLogged ? <h3>Secure info</h3> : 'Not logged!'}
    	</div>
  	);
}

export default App;
