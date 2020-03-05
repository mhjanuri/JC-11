import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { API_URL } from '../helpers/apiurl';
import {
    FILL_LIST_POST
} from './types';

export const getHomeListPost = () => {
    return async (dispatch) => {
        try {
            const token = await AsyncStorage.getItem('usertoken')
            const res = await axios.get(API_URL + '/post/getall', {
                                        headers: {
                                            'Authorization': `Bearer ${token}`
                                        }
                                    })
            console.log(res.data[0])
            dispatch({
                type: FILL_LIST_POST,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}