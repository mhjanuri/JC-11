// import Axios from "axios"
// import { APIURL } from "../../support/ApiUrl"

export const LoginSuccessAction=(datauser)=>{
    return{
        type:'LOGIN_SUCCESS',
        payload:datauser
    }
}

// export const Loginthunk=(username,password)=>{
//     return(dispatch)=>{
//         dispatch({type:'LOGIN_LOADING'})
//         Axios.get(`${APIURL}/users?username=${username}&password=${password}`)
//         .then((res)=>{
//             if (res.data.length) {
//                 localStorage.setItem('dino',res.data[0].id)
//                 dispatch(LoginSuccessAction(res.data[0]))
//             } else {
//                 dispatch({type:'LOGIN_ERROR',payload:'salah masukkan password'})
//             }
//         }).catch((err)=>{
//             console.log(err)
//             dispatch({type:'LOGIN_ERROR',payload:'server error'})
//         })
//     }
// }

export const Login_error=()=>{
    return(dispatch)=>{
        dispatch({type:'LOGIN_ERROR',payload:'Login_error'})
    }
}

export const countCart = (number) => {
    return {
        type: 'COUNT_CART',
        payload: number
    }
}

export const GantiPassword = (passwordbaru) => {
    return {
      type: "GANTI_PASSWORD",
      payload: passwordbaru
    };
};