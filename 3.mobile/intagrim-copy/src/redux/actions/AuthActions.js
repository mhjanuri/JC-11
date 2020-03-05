import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { API_URL } from './../../support/apiUrl';

import{
    START_REGISTER,
    START_LOGIN,
    REGISTER_FAILED,
    LOGIN_FAILED,
    USER_LOGOUT,
    LOGIN_USER_SUCCESS
}from './types'


export const notLoginYet = () => {
    return {
        type: USER_LOGOUT
    }
}

export const alreadyLogin = (user) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: user
    }
}

export const onUserRegister = ({email,username,password,conPassword}) => {
    return (dispatch) => {
        dispatch({ type: START_REGISTER })
        if(email !== '' 
            && username !== '' 
            && password !== '' 
            && conPassword !== ''
        ) {
            if(password === conPassword) {
                axios.post(`${API_URL}/user/register`, { email, username, password })
                    .then((res) => {
                        // console.log(res)
                        axios.post(`${API_URL}/user/login`, { email, password })
                            .then(async (res) => {
                                console.log(res.data)
                                try {
                                    await AsyncStorage.setItem('usertoken', res.data.token);
                                    dispatch({
                                        type: LOGIN_USER_SUCCESS,
                                        payload: res.data
                                    });
                                } catch (err) {
                                    dispatch({ 
                                        type: REGISTER_FAILED, 
                                        payload: err.message 
                                    });
                                }   
                            })
                            .catch((err) => {
                                console.log(err)
                                dispatch({ 
                                    type: REGISTER_FAILED, 
                                    payload: err.response.data.message 
                                });
                            });
                    }).catch((err) => {
                        console.log(err)
                        dispatch({ 
                            type: REGISTER_FAILED, 
                            payload: err.response.data.message 
                        });
                    })
            } else {
                dispatch({ 
                    type: REGISTER_FAILED, 
                    payload: 'Confirm Password and Password Must Equal'
                })
            }
        } else {
            dispatch({ 
                type: REGISTER_FAILED, 
                payload: 'Please Fill All The Inputs Above'
            })
        }
    }
}

export const onUserLogin = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: START_LOGIN })
        if(email !== '' && password !== '') {
            axios.post(`${API_URL}/user/login`, { email, password })
                .then(async (res) => {
                    try {
                        await AsyncStorage.setItem('usertoken', res.data.token);
                        dispatch({
                            type: LOGIN_USER_SUCCESS,
                            payload: res.data
                        });
                    } catch (err) {
                        dispatch({ 
                            type: REGISTER_FAILED, 
                            payload: err.message 
                        });
                    }   
                }).catch(err => {
                    dispatch({
                        type: LOGIN_FAILED,
                        payload: err.response.data.message
                    })
                })
        } else {
            dispatch({ 
                type: LOGIN_FAILED, 
                payload: 'Please Fill Email and Password'
            })
        }
    }
}

export const onUserLogout = () => {
    return async (dispatch) => {
        try {
            await AsyncStorage.removeItem('usertoken');
            dispatch({ type: USER_LOGOUT })
        } catch(err) {
            console.log(err)
        }
    }
}