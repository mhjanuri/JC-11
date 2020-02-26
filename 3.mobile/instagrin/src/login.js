import React,{useEffect} from 'react';
import {Text,View,Button} from 'react-native'
import style from './style/style'
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
    const Gotohome=()=>{
        props.navigation.navigate('Drawermain')
    }
    return(
        <View style={style.gaya}>
            <Animatable.Text animation='bounceIn' iterationCount='infinite'>
                <Text>Login</Text>
            </Animatable.Text>
            <Button
                title="Go to Register"
                onPress={() => props.navigation.navigate('Register')}
            />
            <View style={{marginTop:10}}>
                <Button
                    color='tomato'
                    title="Go to Home"
                    onPress={Gotohome}
                />
            </View>
        </View>
    )
}

export default Login