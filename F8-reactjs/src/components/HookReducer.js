import { useReducer, useRef } from 'react'
import { set_Job, add_Job, delete_Job } from '../store/actions'
import logger from '../store/logger'
import reducer, { initState } from '../store/reducer'
/* 
useState, useReducers: chức năng giống nhau
useReducers: sử dụng cho các state phức tạp

useState
    1. Init state: 0
    2. Actions: Up(state + 1) / Down(state - 1)
useReducers
    1. Init state: 0
    2. Actions: Up(state - 1) / Down(state - 1)
    3. Reducer
    4. Dispatch
*/

function HookReducer() {
	const [state, dispatch] = useReducer(logger(reducer), initState)
	const { job, jobs } = state
	const inputRef = useRef()

	const handleSubmit = () => {
		dispatch(add_Job(job))
		dispatch(set_Job(''))
		inputRef.current.focus()
	}
	return (
		<>
			<input
				placeholder="Enter todo..."
				ref={inputRef}
				value={job}
				onChange={(e) => dispatch(set_Job(e.target.value))}
			/>
			<input type="button" value="Add" onClick={handleSubmit} />
			<ul>
				{jobs.map((item, index) => (
					<li key={index}>
						{item}
						<span onClick={() => dispatch(delete_Job(index))}>
							&times;
						</span>
					</li>
				))}
			</ul>
		</>
	)
}
export default HookReducer
