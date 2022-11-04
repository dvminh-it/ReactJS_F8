import * as types from '../constants'

export const getUser = (payload) => {
    return {
        type: types.GET_USER_REQUEST,
        payload
    }
}
export const getUserSuccess = (payload) => {
    return {
        type: types.GET_USER_SUCCESS,
        payload
    }
}
export const getUserFailure = (payload) => {
    return {
        type: types.GET_USER_FAILURE,
        payload
    }
}
export const addUser = (payload) => {
    return {
        type: types.ADD_USER_REQUEST,
        payload
    }
}
export const addUserSuccess = (payload) => {
    return {
        type: types.ADD_USER_SUCCESS,
        payload
    }
}
export const addUserFailure = (payload) => {
    return {
        type: types.ADD_USER_FAILURE,
        payload
    }
}
export const updateUser = (payload) => {
    return {
        type: types.UPDATE_USER_REQUEST,
        payload
    }
}
export const updateUserSuccess = (payload) => {
    return {
        type: types.UPDATE_USER_SUCCESS,
        payload
    }
}
export const updateUserFailure = (payload) => {
    return {
        type: types.UPDATE_USER_FAILURE,
        payload
    }
}

export const deleteUser = (payload) => {
    return {
        type: types.DELETE_USER_REQUEST,
        payload
    }
}
export const deleteUserSuccess = (payload) => {
    return {
        type: types.DELETE_USER_SUCCESS,
        payload
    }
}
export const deleteUserFailure = (payload) => {
    return {
        type: types.DELETE_USER_FAILURE,
        payload
    }
}

export const searchUser = (payload) => {
    return {
        type: types.SEARCH_USER_REQUEST,
        payload
    }
}
export const searchUserSuccess = (payload) => {
    return {
        type: types.SEARCH_USER_SUCCESS,
        payload
    }
}
export const searchUserFailure = (payload) => {
    return {
        type: types.SEARCH_USER_FAILURE,
        payload
    }
}

export const paginateUser = (payload) => { 
    return {
        type: types.PAGINATE_USER_REQUEST,
        payload
    }
}
export const paginateUserSuccess = (payload) => {
    return {
        type: types.PAGINATE_USER_SUCCESS,
        payload
    }
}
export const paginateUserFailure = (payload) => {
    return {
        type: types.PAGINATE_USER_FAILURE,
        payload
    }
}

export const searchPaginateUser = (payload) => {
    return {
        type: types.SEARCH_PAGINATE_USER_REQUEST,
        payload
    }
}
export const searchPaginateUserSuccess = (payload) => {
    return {
        type: types.SEARCH_PAGINATE_USER_SUCCESS,
        payload
    }
}
export const searchPaginateUserFailure = (payload) => {
    return {
        type: types.SEARCH_PAGINATE_USER_FAILURE,
        payload
    }
}