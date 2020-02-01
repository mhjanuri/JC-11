import Axios from 'axios'
import { APIURL,apiRealUrl } from '../../support/ApiUrl'

export const LoginSuccessAction=(datauser)=>{
    return{
        type:'LOGIN_SUCCESS',
        payload:datauser
    }
}
export const CartAction=(jumlahcart)=>{
    return{
        type:'CART',
        payload:jumlahcart
    }
}
export const LogOutAction=()=>{
    return{
        type:'LOGOUT'
    }
}

export const Loginthunk=(username,password)=>{
    return(dispatch)=>{
        dispatch({type:'LOGIN_LOADING'})
        Axios.get(`${apiRealUrl}user/authlog?username=${username}&password=${password}`)
        .then((res)=>{
            if(res.data.result.length){
                localStorage.setItem('dino',res.data.result[0].id)
                localStorage.setItem('token',res.data.token)
                dispatch(LoginSuccessAction(res.data.result[0]))
                // Axios.get(`${APIURL}orders?userId=${res.data[0].id}&bayar=false`)
                // .then(res=>{
                //   dispatch({type:'CART',payload:res.data.length})
                // })
            }else{
                dispatch({type:'LOGIN_ERROR',payload:'Salah masukin Password'})
            }
        }).catch((err)=>{
            console.log(err)
            dispatch({type:'LOGIN_ERROR',payload:'server error'})
        })
    }
}

export const Login_error=()=>{
    return(dispatch)=>{
        dispatch({type:'LOGIN_ERROR',payload:''})
    }
}