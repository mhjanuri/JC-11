import React from 'react';
import {Text,View,Button} from 'react-native'
import style from './style/style'

const Details=({navigation})=>{
    return(
        <View style={style.gaya}>
            <Text>Details</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default Details