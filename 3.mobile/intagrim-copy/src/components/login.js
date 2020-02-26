import React,{useEffect,useReducer,useState} from 'react';
import {View,StatusBar} from 'react-native'
import { Text, Input, Icon, Button } from 'react-native-elements';
import style from './../style/style'
import * as Animatable from 'react-native-animatable'
import {CommonActions} from '@react-navigation/native'

const Login=(props)=>{
    // useEffect(()=>{
    //     const resetcomm=CommonActions.reset({
    //         index:0,
    //         routes:[
    //             {name:'Register'}
    //         ]
    //     })
    //     props.navigation.dispatch(resetcomm)
    // },[])
    const [passHidden,setpassHidden]=useState(true)
    // const [conpassHidden,setconpassHidden]=useState(true)

    // const Gotohome=()=>{
    //     props.navigation.navigate('Drawermain')
    // }
    return(
        <View style={style.LogcontainerStyle}>
            
        </View>
    )
}

export default Login