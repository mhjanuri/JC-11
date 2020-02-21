import React from 'react';
import {Text, View, Button } from 'react-native'
import style from './style/style'

const Login = ({navigation}) => {
    return (
        <View style={style.gaya}>
            <Text>Login</Text>
            <Button 
                title= "go to Register"
                onPress={()=>navigation.navigate('Register')}
            />
            <Button 
                title= "go to Home"
                onPress={()=>navigation.navigate('Hometab')}
            />
        </View>
    );
}

 
export default Login;