import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { API_URL } from './../../support/apiUrl';
import { 
    HOME_REFRESHING,
    FILL_POST_LIST,
    SELECT_POST_PROFILE
} from './types';

export const getListPost = () => {
    return async (dispatch) => {
        const token = await AsyncStorage.getItem('usertoken')
        const options = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        try {
            dispatch({ type: HOME_REFRESHING })
            const res = await axios.get(`${API_URL}/post/getall`, options)
            // console.log('Post List : ', res.data)
            console.log('berhasil get post list')
            dispatch({
                type: FILL_POST_LIST,
                payload: res.data
            })
        } catch(err) {
            console.log(err.response)
        }
    }
}
export const selectProfilePost = (post) => {
    return {
        type: SELECT_POST_PROFILE,
        payload: post
    }
}