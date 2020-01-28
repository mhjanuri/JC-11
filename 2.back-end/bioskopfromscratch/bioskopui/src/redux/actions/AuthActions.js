import Axios from 'axios'
import { APIURL } from '../../support/ApiUrl'

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
        Axios.get(`${APIURL}users?username=${username}&password=${password}`)
        .then((res)=>{
            if(res.data.length){
                localStorage.setItem('dino',res.data[0].id)
                dispatch(LoginSuccessAction(res.data[0]))
                Axios.get(`${APIURL}orders?userId=${res.data[0].id}&bayar=false`)
                .then(res=>{
                  dispatch({type:'CART',payload:res.data.length})
                })
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