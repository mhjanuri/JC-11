import { TAMBAH, KURANG } from "../type"

export const Tambahactions=()=>{
    return{
        type:TAMBAH
    }
}
export const Kurangctions=()=>{
    return{
        type:KURANG
    }
}
export const ResetActions=()=>{
    return{
        type:'RESET'
    }
}