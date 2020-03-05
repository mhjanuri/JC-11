import React,{useEffect,useReducer,useState} from 'react';
import {View,StatusBar} from 'react-native'
import { Text, Input, Icon, Button } from 'react-native-elements';
import style from './../style/style'
import * as Animatable from 'react-native-animatable'
import {connect} from 'react-redux'
import {CommonActions} from '@react-navigation/native'
import {onUserLogin} from '../redux/actions'

const reducers=(state,action)=>{
    switch(action.type){
        case 'Change-data':
            return {...state,[action.name]:action.payload};
        case 'Initial_State':
            return {email:'',password:'',passHidden:true}
        default:
            return state
    }
}


const Login=(props)=>{
    const [state,dispatch]=useReducer(reducers,{email:'',password:'',passHidden:true})
    // useEffect(()=>{
    //     const resetcomm=CommonActions.reset({
    //         index:0,
    //         routes:[
    //             {name:'Register'}
    //         ]
    //     })
    //     props.navigation.dispatch(resetcomm)
    // },[])
    // const [passHidden,setpassHidden]=useState(true)
    // const [conpassHidden,setconpassHidden]=useState(true)

    // const Gotohome=()=>{
    //     props.navigation.navigate('Drawermain')
    // }
    useEffect(()=>{
        if(props.user) {
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [
                    {name:'Drawermain'}
                ]
            });
            dispatch({type:'Initial_State'})
            props.navigation.dispatch(resetAction);
        }
    })
    const onBtnLoginPress=()=>{
        if(!props.loading){
            props.onUserLogin({ 
                email: state.email,
                password: state.password
            })
        }
    }
    if(props.authChecked && !props.user){
        return(
            <View style={style.LogcontainerStyle}>
                <StatusBar backgroundColor='teal'/>
                <Animatable.Text animation={'fadeInDown'} duration={2000}>
                    <Text h3>Instagrim</Text>
                </Animatable.Text>
                <View style={style.LoginputStyle}>
                    <Input
                        placeholder='Email'
                        leftIcon={
                            <Icon
                                name='email'
                                size={24}
                                color='black'
                            />
                        }
                        value={state.email}
                        onChangeText={(text)=>dispatch({type:'Change-data',name:'email',payload:text})}
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                            />
                        }
                        rightIcon={
                            <Icon
                                name={state.passHidden?'visibility-off':'visibility'}
                                size={24}
                                color={state.passHidden ? '#bfc3c9' : 'black'}
                                onPress={()=>dispatch({type:'Change-data',name:'passHidden',payload:!state.passHidden})}
                            />
                        }
                        secureTextEntry={state.passHidden}
                        value={state.password}
                        onChangeText={(text)=>dispatch({type:'Change-data',name:'password',payload:text})}
                    />
                </View>
                <Text style={{color:'red'}}>{props.error}</Text>
                <Button
                    title="Login"
                    containerStyle={{ width: '95%', marginBottom: 10 }}
                    buttonStyle={{ backgroundColor: 'black' }}
                    loading={props.loading}
                    onPress={onBtnLoginPress}
                />
                <Button
                    title="Go to Register"
                    containerStyle={{ width: '95%' }}
                    buttonStyle={{ borderColor: 'black', borderWidth: 1 }}
                    titleStyle={{ color: 'black' }}
                    type="outline"
                    onPress={() => props.navigation.navigate('Register')}
                />
            </View>
        )
    }
    return (
        <View style={style.LogcontainerStyle}>
            <Animatable.Text animation={'bounce'} iterationCount="infinite">
                <Text h3>Instagrim...</Text>
            </Animatable.Text>
        </View>
    )
}
const mapStateToProps = ({ auth }) => {
    return {
        user: auth.user,
        loading: auth.loadingLogin,
        error: auth.errorLogin,
        authChecked: auth.authChecked
    }
}

export default connect(mapStateToProps,{onUserLogin})(Login)