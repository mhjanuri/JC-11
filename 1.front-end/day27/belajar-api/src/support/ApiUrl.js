import Axios from "axios"

const newtoken = () => {
    var arr=[]
    Axios.get('https://x.rajaapi.com/poe')
        .then((res)=>{
            // console.log(res.data.token)
            arr[arr.length]=res.data.token
        }).catch((err) => {
            console.log(err)
            return Promise.reject(err);
        })
    console.log(arr)
    return arr

}



export const APIURL ='https://x.rajaapi.com/'
export const TOKEN = "CVQj3R2prSv6HJ1b688cGNU0cnqHS6AP3GopOl7fKWFDayC1Ph"

export const TOKENN = newtoken()