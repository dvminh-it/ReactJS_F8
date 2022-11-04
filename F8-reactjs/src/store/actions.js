import { SET_JOB, ADD_JOB, REMOVE_JOB, SET_TODO_INPUT } from './constants'

export const set_Job = (payload) => {
	return { type: SET_JOB, payload }
}

export const add_Job = (payload) => {
	return { type: ADD_JOB, payload }
}

export const delete_Job = (payload) => {
	return { type: REMOVE_JOB, payload }
}

export const setTodoInput = (payload) => {
	return { type: SET_TODO_INPUT, payload }
}
