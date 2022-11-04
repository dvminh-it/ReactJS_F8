import { ADD_JOB, REMOVE_JOB, SET_JOB } from './constants'

export const initState = {
	job: '',
	jobs: [],
}

const reducer = (state, action) => {
	switch (action.type) {
		case SET_JOB:
			return {
				...state,
				job: action.payload,
			}
		case ADD_JOB:
			return {
				...state,
				jobs: [...state.jobs, action.payload],
			}
		case REMOVE_JOB:
			const newJobs = state.jobs
			newJobs.splice(action.index, 1)
			return { ...state, jobs: newJobs }
		default:
			throw new Error('invalid action')
	}
}

export default reducer
