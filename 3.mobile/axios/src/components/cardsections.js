import React from 'react'
import { View, StyleSheet } from 'react-native'



const Cardsection = (props) => {
    return (
        <View>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
})


export default Cardsection;