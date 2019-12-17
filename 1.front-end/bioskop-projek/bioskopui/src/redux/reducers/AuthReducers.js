const INITIAL_STATE={
    id:'',
    username:'',
    password:'',
    login:false,
    error: '',
    loading: false,
    cart:0
}
export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {...state,...action.payload,login:true,loading:false,error:''}
        case 'COUNT_CART':
            return {...state,cart:action.payload}
        case 'LOGIN_LOADING':
            return {...state,loading:true,error:''}
        case 'LOGIN_ERROR':
            return {...state,error:action.payload,loading:false}
        default:
            return state
    }
}