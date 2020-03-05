import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Home from '../components/Home';
import ProfileNav from './ProfileNav';
import PostPhoto from '../components/PostPhoto';

const Tab = createBottomTabNavigator();

export default (props) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = 'home';
                  } else if (route.name === 'ProfileNav') {
                    iconName = 'account-box';
                  } else if (route.name === 'PostPhoto') {
                      iconName = 'add-box'
                  }
      
                  // You can return any component that you like here!
                  return <Icon name={iconName} size={35} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
                showLabel: false
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="PostPhoto" component={PostPhoto} />
            <Tab.Screen name="ProfileNav" component={ProfileNav} />
        </Tab.Navigator>
    )
}
