import {combineReducers} from 'redux'
import AuthReducers from './AuthReducers'
// import CartReducers from './CartReducers'

export default combineReducers({
    Auth:AuthReducers,
    // Cart:CartReducers
})