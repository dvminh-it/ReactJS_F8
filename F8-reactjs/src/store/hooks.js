import { useContext } from 'react'
import Context from './Context'

export const useStore = () => {
	const [state, dispatch] = useContext(Context)
	console.log('🚀 ~ file: hooks.js ~ line 6 ~ useStore ~ dispatch', dispatch)
	console.log('🚀 ~ file: hooks.js ~ line 6 ~ useStore ~ state', state)

	return [state, dispatch]
}
