import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { API_URL } from '../helpers/apiurl';

import {
    INIT_POST_DETAIL_PROFILE
} from './types';

export const initPostDetailProfile = (post) => {
    return {
        type: INIT_POST_DETAIL_PROFILE,
        payload: post
    }
}

export const deletePost = (post) => {
    return async (dispatch) => {
        try {
            const token = await AsyncStorage.getItem('usertoken');
            const options = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }

            const res = await axios.delete(API_URL + '/post/deletepost/' + post.id, options)

        } catch(err) {
            console.log(err)
        }
    }
}