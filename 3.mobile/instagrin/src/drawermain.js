import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { Icon } from 'react-native-elements';
import Hometab from './hometab'
import Settings from './settings'
const Drawer = createDrawerNavigator();

const Drawermain=()=>{
    return(
        <Drawer.Navigator 
            initialRouteName='Hometab'
            drawerType='slide'
            drawerPosition='right'
            drawerContentOptions={
                {
                    activeTintColor:'tomato',
                    inactiveTintColor:'gray',
                    activeBackgroundColor:'transparent',
                }
            }
            // overlayColor={1}
            // keyboardDismissMode='none'
        >
            <Drawer.Screen 
                name='Settings' 
                component={Settings}
                options={{
                    drawerLabel:'Settings',
                    drawerIcon:({color})=>{
                        return(
                            <Icon name='settings' color={color}/>
                            )
                        },
                    }
                    
                }
                
                />
            <Drawer.Screen 
                name='Hometab' 
                component={Hometab} 
                options={{
                    drawerLabel:()=>null,
                    gestureEnabled:false
                }}
            />
        </Drawer.Navigator>
        
        // <Drawer.Navigator 
        //     initialRouteName='profile'
        //     drawerType='slide'
        //     drawerPosition='right'
        //     drawerContentOptions={
        //         {
        //             activeTintColor:'tomato',
        //             inactiveTintColor:'gray',
        //             activeBackgroundColor:'transparent',
                
        //         }
        //     }
            
        //     overlayColor={1}
        // >
        //     <Drawer.Screen 
        //         name='settings' 
        //         component={Settings}
        //         options={{
        //             drawerLabel:'Settings',
        //             drawerIcon:({color})=>{
        //                 return(
        //                     <Icon name='settings' color={color}/>
        //                     )
        //                 }
        //             }}
        //     />
        //     <Drawer.Screen 
        //         name='profile' 
        //         component={Profile}
        //         options={{
        //             drawerLabel:()=>null
        //         }}    
        //     />
        // </Drawer.Navigator>
    )
}

export default Drawermain
