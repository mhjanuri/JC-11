import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { 
    onInputText, 
    hideUnhidePassword,
    onUserLogin,
    userLoginCheck
} from '../actions';

class LoginForm extends Component {

    componentDidMount() {
        this.props.userLoginCheck();
    }

    componentDidUpdate() {
        if (this.props.user.token) {
            this.props.navigation.dispatch(StackActions.replace('DrawerMenu'));
        } 
    }

    onBtnLoginPress = () => {
        this.props.onUserLogin(this.props.loginForm)
    }

    render() {
        if(this.props.user.authChecked && !this.props.user.id) {
            return (
                <View style={styles.containerStyle}>
                    <Animatable.Text animation={'fadeInDown'} duration={2000}>
                        <Text h3>Instagrin</Text>
                    </Animatable.Text>
                    <View style={styles.inputContainerStyle}>
                        <Input
                            placeholder='Email'
                            leftIcon={
                                <Icon
                                    name='email'
                                    size={24}
                                    color='black'
                                />
                            }
                            value={this.props.loginForm.email}
                            onChangeText={(val) => this.props.onInputText('email', val)}
                        />
                        <Input
                            placeholder='Password'
                            leftIcon={
                                <Icon
                                    name='lock'
                                    size={24}
                                    color='black'
                                />
                            }
                            rightIcon={
                                <Icon
                                    name={this.props.loginForm.hidePassword ? 'visibility-off' : 'visibility' }
                                    size={24}
                                    color={this.props.loginForm.hidePassword ? '#bfc3c9' : 'black' }
                                    onPress={() => this.props.hideUnhidePassword()}
                                />
                            }
                            value={this.props.loginForm.password}
                            onChangeText={(val) => this.props.onInputText('password', val)}
                            secureTextEntry={this.props.loginForm.hidePassword}
                        />
                    </View>
                    <Text style={{ color: 'red' }}>{this.props.loginForm.error}</Text>
                    <Button
                        title="Login"
                        containerStyle={{ width: '95%', marginBottom: 10 }}
                        buttonStyle={{ backgroundColor: 'black' }}
                        onPress={this.onBtnLoginPress}
                        loading={this.props.loginForm.loading}
                    />
                    <Button
                        title="Register"
                        containerStyle={{ width: '95%' }}
                        buttonStyle={{ borderColor: 'black', borderWidth: 1 }}
                        titleStyle={{ color: 'black' }}
                        type="outline"
                        onPress={() => this.props.navigation.navigate('Register')}
                    />
                </View>
            )
        }
        
        return (
            <View style={styles.containerStyle}>
                <Icon type="feather" size={70} name="instagram" />
                <Text h4>Instagrin</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    inputContainerStyle: {
        marginTop: 50,
        marginBottom: 100,
        width: '100%'
    }
})

const mapStateToProps = ({ user, loginForm }) => {
    return { user, loginForm }
}

export default connect(mapStateToProps, { 
    onInputText, 
    hideUnhidePassword,
    onUserLogin,
    userLoginCheck
})(LoginForm);