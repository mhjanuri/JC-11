import React from 'react';
import { Text, View, Button } from 'react-native'
import style from './style/style'

const Settings = ({ navigation }) => {
    return (
        <View style={style.gaya}>
            <Text>Settings</Text>
            <Button
                title="go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            
        </View>
    );
}


export default Settings;