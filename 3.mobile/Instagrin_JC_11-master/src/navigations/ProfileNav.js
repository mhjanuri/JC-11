import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../components/Profile';
import EditProfile from '../components/EditProfile';
import PostDetailProfile from '../components/PostDetailProfile';

const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator 
          initialRouteName="Profile"
          headerMode="none"
        >
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="PostDetailProfile" component={PostDetailProfile} />
        </Stack.Navigator>
    )
}