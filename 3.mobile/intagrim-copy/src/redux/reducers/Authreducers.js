import { 
  START_REGISTER,
  START_LOGIN,
  REGISTER_FAILED,
  LOGIN_FAILED,
  USER_LOGOUT,
  LOGIN_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { 
    user: null,
    loadingRegister: false,
    errorRegister: '',
    errorLogin: '',
    loadingLogin: false,
    authChecked: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER_FAILED :
            return { ...state, loadingRegister: false, errorRegister: action.payload }
        case START_REGISTER :
            return { ...state, loadingRegister: true, errorRegister: '' }
        case START_LOGIN :
            return { ...state, loadingLogin: true, errorLogin: '' }
        case LOGIN_FAILED :
            return { ...state, loadingLogin: false, errorLogin: action.payload }
        case LOGIN_USER_SUCCESS :
            return { ...INITIAL_STATE, user: action.payload };
        case USER_LOGOUT :
            return { ...INITIAL_STATE, authChecked: true };
        default :
            return state;
    }
};
