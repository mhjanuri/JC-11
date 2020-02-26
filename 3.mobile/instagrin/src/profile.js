import React from 'react';
import {Text,View,Button} from 'react-native'
import style from './style/style'

const Settings=({navigation})=>{
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