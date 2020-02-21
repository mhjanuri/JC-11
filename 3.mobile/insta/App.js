/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './src/login';
import Register from './src/register';



const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen name='login' component={Login} options/>
          <AppStack.Screen name='login' component={Register} />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
