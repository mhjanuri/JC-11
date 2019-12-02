// import { TAMBAH, KURANG, RESET, JUMLAH } from "../type"
import { JUMLAH } from "../type"


// export const Tambahactions=()=>{
//     return{
//         type:TAMBAH
//     }
// }
// export const Kurangactions=()=>{
//     return{
//         type:KURANG
//     }
// }
// export const ResetActions=()=>{
//     return{
//         type:RESET
//     }
// }
export const StrCount = (n) => {
    return {
        type: JUMLAH,
        payload: n
    }
}