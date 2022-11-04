import { useStore, actions } from '../store'

function HomePage() {
	const [state, dispatch] = useStore()
	const { todos, todoInput } = state
	console.log('🚀 ~ file: HomePage.js ~ line 5 ~ HomePage ~ state', state)
	return (
		<>
			<input
				value={todoInput}
				placeholder="Enter todo:"
				onChange={(e) => {
					dispatch(actions.setTodoInput(e.target.value))
					return console.log('onchange')
				}}
			/>
		</>
	)
}

export default HomePage
