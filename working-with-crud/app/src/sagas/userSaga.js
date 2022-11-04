import { put, takeEvery, select } from 'redux-saga/effects'

import * as types from '../constants'
import * as Api from '../api'
import * as actions from '../actions'

function* getUser() {
    try {
        const res = yield Api.getApi()
        yield put(actions.getUserSuccess({ res: res.data }));
    } catch (err) {
        yield put(actions.getUserFailure());
    }
}
function* addUser(data) {
    try {
        yield Api.addApi(data)
        yield put(actions.addUserSuccess());
        const res = yield Api.paginateApi(data)
        yield put(actions.paginateUser({ activePage: res.totalPages }));
    } catch (err) {
        yield put(actions.addUserFailure());
    }
}

function* updateUser(data) {
    try {
        yield Api.updateApi(data)
        yield put(actions.updateUserSuccess());
        const reducer = yield select((state) => {
            return {
                paginateUsers: state.users.paginateUsers,
                totalPages: state.users.totalPages,
                activePage: state.users.activePage,
            }
        })
        yield put(actions.paginateUser({ activePage: reducer.activePage }));
    } catch (err) {
        yield put(actions.updateUserFailure());
    }
}


function* deleteUser(data) {
    try {
        yield Api.deleteApi(data)
        yield put(actions.deleteUserSuccess());
        const reducer = yield select((state) => {
            return {
                paginateUsers: state.users.paginateUsers,
                totalPages: state.users.totalPages,
                activePage: state.users.activePage,
            }
        })
        if (reducer.paginateUsers.length > 1) {
            yield put(actions.paginateUser({ activePage: reducer.activePage }))
        } else {
            if (reducer.activePage === 1) {
                yield put(actions.paginateUserSuccess({ activePage: 1, totalPages: 1, paginateUsers: [] }))
            } else {
                yield put(actions.paginateUser({ activePage: reducer.activePage - 1 }))
            }
        }
    } catch (err) {
        yield put(actions.deleteUserFailure());
    }
}

function* searchUser(data) {
    try {
        const res = yield Api.searchApi(data)
        yield put(actions.searchUserSuccess({ res: res.data }));
    } catch (err) {
        yield put(actions.searchUserFailure());
    }
}

function* paginateUser(data) {
    try {
        const res = yield Api.paginateApi(data)
        if (res.totalPages === 0) res.totalPages = 1
        yield put(actions.paginateUserSuccess(res));
    } catch (err) {
        yield put(actions.paginateUserFailure());
    }
}

function* searchPaginateUser(data) {
    try {
        const res = yield Api.searchPaginateApi(data);
        yield put(actions.searchPaginateUserSuccess(res));
    } catch (err) {
        yield put(actions.searchPaginateUserFailure());
    }
}



export default function* userSaga() {
    yield takeEvery(types.GET_USER_REQUEST, getUser);
    yield takeEvery(types.ADD_USER_REQUEST, addUser);
    yield takeEvery(types.UPDATE_USER_REQUEST, updateUser);
    yield takeEvery(types.DELETE_USER_REQUEST, deleteUser);
    yield takeEvery(types.SEARCH_USER_REQUEST, searchUser);
    yield takeEvery(types.PAGINATE_USER_REQUEST, paginateUser);
    yield takeEvery(types.SEARCH_PAGINATE_USER_REQUEST, searchPaginateUser);

}