import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Profile from './profile'
import PostdetailProfile from './Postdetailprofile'


const Stackprofile = createStackNavigator();


const Stackprofiles=()=>{
    return(
        <Stackprofile.Navigator initialRouteName='Profile'>
            <Stackprofile.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
            <Stackprofile.Screen name='detailProfile' component={PostdetailProfile} options={{headerShown:false}} />
        </Stackprofile.Navigator>
    )
}


export default Stackprofiles
