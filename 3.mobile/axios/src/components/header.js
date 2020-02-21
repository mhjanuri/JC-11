import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    const { viewStyle, textStyle }=styles
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.name}</Text>
        </View>
    ) ;
} ;

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
})

export default Header;
