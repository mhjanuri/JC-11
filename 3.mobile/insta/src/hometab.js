import React from 'react';
import {} from 'react-native-elements'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './home'
import Search from './search';
import Add from './add';
import Like from './like';
import Profile from './profile';

const Tab = createBottomTabNavigator()
const Tabnavigation=()=>{
    return (
        <Tab.Navigator
            initialRouteName='Home' 
            screenOptions={({route}) => ({
                tabBarIcon:({focused, color, size})=>{
                    let iconName;

                    if (route.name==='Home') {
                        iconName = focused ? 'home' : 'home'
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'account-box' : 'account-box'
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search'
                    } else if (route.name === 'Like') {
                        iconName = focused ? 'md-heart-half' : 'md-heart-half'
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'account-box' : 'account-box'
                    }
                }
            })}
        >
            <Tab.Screen name='home' component={Home} />
            <Tab.Screen name='search' component={Search} />
            <Tab.Screen name='add' component={Add} />
            <Tab.Screen name='like' component={Like} />
            <Tab.Screen name='profile' component={Profile} />
        </Tab.Navigator>
    )
}

export default Tabnavigation;
