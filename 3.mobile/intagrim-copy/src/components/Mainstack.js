import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Drawermain from './drawermain'
import Login from './login'
import Register from './register'

const MainStack = createStackNavigator();

const MainStacks= () => {
  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName='Login'>
            <MainStack.Screen name='Login' component={Login} options={{headerShown:false}} />
            <MainStack.Screen name='Register' component={Register} options={{headerShown:false}}/>
            <MainStack.Screen name='Drawermain' component={Drawermain} options={{headerShown:false}}/>
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default MainStacks;