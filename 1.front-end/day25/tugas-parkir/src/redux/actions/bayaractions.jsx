export const Pay=(a)=>{
    return{
        type:'BAYAR',
        payload:a,
    }
}
export const Jam = (b) => {
    return {
        type: 'PARKIR',
        parkir: b,
    }
}