const INITIAL_STATE={
    pay:0,
    parkir:0
}
export default(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'BAYAR':
            return{...state,pay:action.payload}
        case 'PARKIR':
            return { ...state, parkir: action.parkir }
        default:
            return state
    }
}