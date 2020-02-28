import React,{useState, useReducer,useEffect} from 'react';
import {View} from 'react-native'
import { Text, Input, Icon, Button } from 'react-native-elements';
import style from './../style/style'
import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux'
import {onUserRegister} from './../redux/actions'
import {CommonActions} from '@react-navigation/native'


const reducers=(state,action)=>{
    switch(action.type){
        case 'Change-data':
            return {...state,[action.name]:action.payload};
        case 'balikstate':
            return {email:'',username:'',password:'',conpassword:''}
        default:
            return state
    }
}


// fbec40e5-2d70-4792-841e-f54876f1cdaa
const Register=({navigation,loading,error,user,onUserRegister})=>{
    const [state,dispatch]=useReducer(reducers,{email:'',username:'',password:'',conpassword:''})
    const [passHidden,setpassHidden]=useState(true)
    const [conpassHidden,setconpassHidden]=useState(true)

    useEffect(()=>{
        if(user
            && state.email !== '' 
            && state.username !== '' 
            && state.password !== ''
            && state.conpassword !== ''
        ){
            dispatch({type:'balikstate'})
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [
                    {name:'Drawermain'}
                ],
            });
            navigation.dispatch(resetAction);
        }
    })


    const onBtnRegisterPress=()=>{
        if(!loading) {
            onUserRegister({
                email: state.email,
                username: state.username,
                password: state.password,
                conPassword: state.conpassword
            })
        }
    }
    return(
        <View style={style.RegcontainerStyle}>
            <Animatable.Text animation={'fadeInDown'} duration={2000}>
                <Text h3>Register</Text>
            </Animatable.Text>
            <View style={style.ReginputStyle}>
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
                    placeholder='Username'
                    leftIcon={
                        <Icon
                            name='account-box'
                            size={24}
                            color='black'
                        />
                    }
                    value={state.username}
                    onChangeText={(text)=>dispatch({type:'Change-data',name:'username',payload:text})}
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
                            name={passHidden?'visibility-off':'visibility'}
                            size={24}
                            color={passHidden ? '#bfc3c9' : 'black'}
                            onPress={()=>setpassHidden(!passHidden)}
                        />
                    }
                    secureTextEntry={passHidden}
                    value={state.password}
                    onChangeText={(text)=>dispatch({type:'Change-data',name:'password',payload:text})}
                />
                <Input
                    placeholder='Confirm Password'
                    leftIcon={
                        <Icon
                            name='lock'
                            size={24}
                            color='black'
                        />
                    }
                    rightIcon={
                        <Icon
                            name={conpassHidden?'visibility-off':'visibility'}
                            size={24}
                            color={conpassHidden ? '#bfc3c9' : 'black'}
                            onPress={()=>setconpassHidden(!conpassHidden)}
                        />
                    }
                    secureTextEntry={conpassHidden}
                    value={state.conpassword}
                    onChangeText={(text)=>dispatch({type:'Change-data',name:'conpassword',payload:text})}
                />
            </View>
            <Text style={{color:'red'}}>{error}</Text>
            <Button
                    title="Register"
                    containerStyle={{ width: '95%', marginBottom: 10 }}
                    buttonStyle={{ backgroundColor: 'black' }}
                    onPress={onBtnRegisterPress}
                    loading={loading}
                />
            <Button
                title="Back to Login"
                containerStyle={{ width: '95%' }}
                buttonStyle={{ borderColor: 'black', borderWidth: 1 }}
                titleStyle={{ color: 'black' }}
                type="outline"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}  

const mapStateToProps = ({ auth }) => {
    return { 
        error: auth.errorRegister, 
        loading: auth.loadingRegister,
        user: auth.user
    }
}

export default connect(mapStateToProps,{onUserRegister})(Register);