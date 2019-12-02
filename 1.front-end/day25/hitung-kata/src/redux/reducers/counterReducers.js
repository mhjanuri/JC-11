// import { TAMBAH,KURANG,RESET,JUMLAH} from "../type"
import { JUMLAH } from "../type"

const INITIAL_STATE=0

const countWords=(s)=> {
  s = s.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
  s = s.replace(/[ ]{2,}/gi, " ");//2 or more space to 1
  s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
  return s.split(' ').filter(function (str) { return str !== ""; }).length;
  //return s.split(' ').filter(String).length; - this can also be used
}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
      case JUMLAH:
        return countWords(action.payload)
      // case TAMBAH:
      //   return state + 1
      // case KURANG:
      //   return state - 1
      // case RESET:
      //   return INITIAL_STATE
      default:
        return state
    }
}