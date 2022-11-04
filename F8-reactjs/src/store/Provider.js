import { useReducer } from 'react'
import Context from './Context'
import reducerTodo, { initState } from './reducerTodo'

function Provider({ children }) {
	const [state, dispatch] = useReducer(reducerTodo, initState)
	return (
		<Context.Provider value={[state, dispatch]}>
			{children}
		</Context.Provider>
	)
}

export default Provider
