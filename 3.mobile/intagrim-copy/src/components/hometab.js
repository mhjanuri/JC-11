import React from 'react';
import { Icon } from 'react-native-elements';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Profiledraw from './profiledraw'


import Home from './home'
import Search from './search'
import Add from './add'
import Like from './like'
import Profile from './profile'

const Tab = createBottomTabNavigator();
const Tabnavigation=()=>{
    return(
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({route})=>({
                tabBarIcon:({focused,color,size})=>{
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'account-box' : 'account-box';
                    }else if(route.name==='Search'){
                        iconName=focused?'search':'search'
                    }else if(route.name==='Like'){
                        iconName=focused?'md-heart-half':'md-heart-half'  
                        return <Icon name={iconName} size={size} type='ionicon' color={color} />;
                    }else{
                        iconName=focused?'add-box':'add-box'
                    }
        
                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size}  color={color} />;
                }
            })}
            tabBarOptions={{
                activeTintColor: 'salmon',
                inactiveTintColor: 'gray',
                showLabel:false,
            }}
        >
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Search' component={Search}/>
            <Tab.Screen name='Add' component={Add}/>
            <Tab.Screen name='Like' component={Like}/>
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>

        // <Tab.Navigator 
        //     initialRouteName='Home'
        //     screenOptions={({ route }) => ({
        //         tabBarIcon: ({ focused, color, size }) => {
        //             let iconName;
        
        //             if (route.name === 'Home') {
        //                 iconName = focused
        //                     ? 'home'
        //                     : 'home';
        //             } else if (route.name === 'Profiledraw') {
        //                 iconName = focused ? 'settings' : 'settings';
        //             }
        
        //             // You can return any component that you like here!
        //             return <Icon name={iconName} size={size} color={color} />;
        //         },
        //     })}
        //     tabBarOptions={{
        //         activeTintColor: 'tomato',
        //         inactiveTintColor: 'gray',
        //         showLabel:false
        //     }}
        // >
        //     <Tab.Screen name="Home" component={Home} />
        //     <Tab.Screen name="Profiledraw" component={Profiledraw} />
        // </Tab.Navigator>
    )
}

export default Tabnavigation;