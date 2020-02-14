import React, { Component } from 'react';
import { View, Text } from 'react-native';
import gaya from './gaya'

class Header extends Component {
    state = {  }
    render() { 
        const {tulisan,kotak1}=gaya
        return (
            <View style={kotak1}>
                <Text style={tulisan}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
}
 
export default Header;