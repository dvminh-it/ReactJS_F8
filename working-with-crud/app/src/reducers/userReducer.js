
import * as types from '../constants'

const DEFAULT_STATE = {
    loading: false,
    error: false,
    listUsers: [],
    paginateUsers: [],
    activePage: 1,
    totalPages: 1
}

const userReducer = (state = DEFAULT_STATE, actions) => {
    switch (actions.type) {
        case types.GET_USER_REQUEST:
        case types.ADD_USER_REQUEST:
        case types.UPDATE_USER_REQUEST:
        case types.DELETE_USER_REQUEST:
        case types.SEARCH_USER_REQUEST:
        case types.PAGINATE_USER_REQUEST:
        case types.SEARCH_PAGINATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.ADD_USER_SUCCESS:
        case types.UPDATE_USER_SUCCESS:
        case types.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
            }
        case types.GET_USER_SUCCESS:
        case types.SEARCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                listUsers: actions.payload.res,
            }
        case types.SEARCH_PAGINATE_USER_SUCCESS:
        case types.PAGINATE_USER_SUCCESS:
            let newValue = {
                ...state,
                loading: false,
                error: false,
                paginateUsers: actions.payload.data,
                activePage: actions.payload.activePage,
                totalPages: actions.payload.totalPages,
            }; return newValue
        case types.GET_USER_FAILURE:
        case types.ADD_USER_FAILURE:
        case types.UPDATE_USER_FAILURE:
        case types.DELETE_USER_FAILURE:
        case types.SEARCH_USER_FAILURE:
        case types.PAGINATE_USER_FAILURE:
        case types.SEARCH_PAGINATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state
    }
}

export default userReducer