import React from 'react';
import {Text,View,Button,Alert} from 'react-native'
import style from './../style/style'
import {State,PanGestureHandler} from 'react-native-gesture-handler'
const Settings=({navigation})=>{
    const _handleStateChange = ({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
            navigation.openDrawer()
        }
      };
    return(

            <View style={style.gaya}>
                    <Text>Profile</Text>
                    <Button
                        title='to settings'
                        onPress={()=>navigation.openDrawer()}
                    />
            </View>

    )
}

export default Settings