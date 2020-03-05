import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import DrawerNav from '../navigations/DrawerNav';

const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator 
          initialRouteName="Login"
          headerMode="none"
        >
          <Stack.Screen name="Login" component={LoginForm} />
          <Stack.Screen name="Register" component={RegisterForm} />
          <Stack.Screen name="DrawerMenu" component={DrawerNav} />
        </Stack.Navigator>
    )
}