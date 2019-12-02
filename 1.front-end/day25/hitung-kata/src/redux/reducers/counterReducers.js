import { TAMBAH,KURANG,RESET} from "../type"

const INITIAL_STATE=0


export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
      case TAMBAH:
        return state + 1
      case KURANG:
        return state - 1
      case RESET:
        return INITIAL_STATE
      default:
        return state
    }
}