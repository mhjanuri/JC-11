import {
    FILL_LIST_POST
} from '../actions/types';

const INITIAL_STATE = {
    loading: true,
    listPost: []
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case FILL_LIST_POST :
            return { listPost: action.payload, loading: false }
        default :
            return state
    }
}