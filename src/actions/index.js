export const increment = (multiplier) => {
	return{
		type: 'INCREMENT',
		payload: multiplier || 1,
	}
}

export const decrement = () => {
	return{
		type: 'DECREMENT',
	}
}