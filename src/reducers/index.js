import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
	counter: counterReducer,
	isLOgged: loggedReducer,
})

export default allReducers;