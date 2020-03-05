import {
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    authChecked: false
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_LOGIN_SUCCESS :
            return { ...action.payload, authChecked: true }
        case USER_LOGIN_FAIL :
            return { authChecked: true }
        default :
            return state
    }
}
