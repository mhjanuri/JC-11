import React,{useEffect} from 'react';
import {AsyncStorage} from 'react-native'
import MainStack from './src/components/Mainstack'
import {alreadyLogin,notLoginYet} from './src/redux/actions'
import {connect} from 'react-redux'
import axios from 'axios'
import {API_URL} from './src/support/apiUrl'
const Appinit=(props)=>{

    useEffect(()=>{
        const fetchData= async()=>{
            try {
                const token=await AsyncStorage.getItem('usertoken')
                const options = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
                // console.log('initoken',token)
                axios.post(`${API_URL}/user/keeplogin`, null, options)
                .then((res) => {
                  props.alreadyLogin(res.data);
                }).catch((err) => {
                  props.notLoginYet();
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])

    return(
        <MainStack/>
    )
}

export default connect(null,{alreadyLogin,notLoginYet})(Appinit)