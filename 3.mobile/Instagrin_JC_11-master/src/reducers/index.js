import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import LoginFormReducer from './LoginFormReducer';
import HomeListPostReducer from './HomeListPostReducer';
import EditProfileReducer from './EditProfileReducer';
import PostPhotoReducer from './PostPhotoReducer';
import PostDetailProfileReducer from './PostDetailProfileReducer';

export default combineReducers({
    user: UserReducer,
    loginForm: LoginFormReducer,
    homeListPost: HomeListPostReducer,
    editProfile: EditProfileReducer,
    postPhoto: PostPhotoReducer,
    postDetailProfile: PostDetailProfileReducer
})