import {
    INIT_POST_DETAIL_PROFILE
} from '../actions/types';

const INITIAL_STATE = {
    image: '',
    username: '',
    caption: '',
    profileimage: ''
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case INIT_POST_DETAIL_PROFILE :
            return action.payload
        default :
            return state
    }
}