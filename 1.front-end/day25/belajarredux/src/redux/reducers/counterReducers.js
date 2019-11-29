import { TAMBAH,KURANG} from "../type"

const INITIAL_STATE=0

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
      case TAMBAH:
        return state + 1;
      case KURANG:
        return state - 1;
      default:
        return state;
    }
}