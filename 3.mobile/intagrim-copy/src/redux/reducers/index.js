import { combineReducers } from 'redux';
import Counter from './counter' //const Counter=require('./counter')
import AuthReducers from './Authreducers'
export default combineReducers({
    Counter:Counter,
    auth:AuthReducers
})