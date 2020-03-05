import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import Settings from '../components/Settings';
import TabNav from './TabNav';

const Drawer = createDrawerNavigator();

const SettingPage = (nav) => {
    return ({ navigation }) => <Settings navigation={navigation} rootStackNavigation={nav} />
}
export default ({ navigation }) => {
    return (
        <Drawer.Navigator 
            initialRouteName="TabMenu"
            drawerStyle={{
                backgroundColor: '#fff',
                borderColor: '#cfcfcf',
                borderWidth: 1
             }}
            drawerPosition='right'
            drawerType='slide'
            overlayColor={1}
            drawerContentOptions={{
                activeTintColor: 'black',
                activeBackgroundColor: '#fff',
                justifyContent: 'flex-end'
            }}
        >
            <Drawer.Screen 
                name="TabMenu" 
                component={TabNav}
                options={{
                    drawerLabel: () => null
                }}
            />
            <Drawer.Screen 
                name="Settings"
                options={{
                    drawerIcon: ({ tintColor }) => (
                        <Icon name={'cog'} type='font-awesome' size={25} color={tintColor} />
                    ),
                    gestureEnabled: false
                }}
            >
                {SettingPage(navigation)}
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}