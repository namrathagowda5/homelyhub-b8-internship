import {userActions} from './user-slice';
import {axiosInstance} from '../../utils/axios.js';

//signup
export const getsignupDetails = (user) => async (dispatch) => {
    try {
        dispatch(userActions.getsignupRequest());
        const { data } = await axiosInstance.post('/v1/user/signup', user);
        dispatch(userActions.getsignupDetails(data.user))
    } catch (error) {
        dispatch(userActions.getError(error.response.data.message))
    }
}

//login
export const getLogin = (user) => async (dispatch) => {
    try {
        dispatch(userActions.getLoginRequest());
        const { data } = await axiosInstance.post('/v1/user/login', user);
        dispatch(userActions.getLoginDetails(data.user))
    } catch (error) {
        dispatch(userActions.getError(error.response.data.message))
    }
}

export const currentUser = () => async (dispatch) => {
    try {
        dispatch(userActions.getCurrentRequest());
        const { data } = await axiosInstance.get('/v1/user/me');
        dispatch(userActions.getCurrentUser(data.user));
    } catch (error) {
        dispatch(userActions.getError(null));
        
    }
}

export const updateUser = (user) => async (dispatch) => {
    try {
       dispatch(userActions.getUpdateUserRequest());
        const response = await axiosInstance.patch('/v1/user/updateMe', user);
        console.log(response)
        dispatch(userActions.getCurrentUser(response.data.data.user));
    } catch (error) {
        dispatch(userActions.getError(error.response.data.message));
    }
}

export const forgotPassword = (email) => async (dispatch) => {
    try {
        await axiosInstance.post('/v1/user/forgotPassword', {email})
    } catch (error) {
        dispatch(userActions.getError(error.response.data.message));
    }
}
export const resetPassword = (token, repassword) => async (dispatch) => {
    try {
        await axiosInstance.patch(`/v1/user/resetPassword/${token}`, repassword)
    } catch (error) {
        dispatch(userActions.getError(error.response.data.message));
    }
}

export const updatePassword = (passwords) => async (dispatch) => {
    try {
        dispatch(userActions.getPasswordRequest());
        await axiosInstance.patch('/v1/user/updateMyPassword', passwords);
        dispatch(userActions.getPasswordSuccess(true));
    } catch (error) {
        dispatch(userActions.getError(error.response.data.message));
    }
}

export const logout = () => async (dispatch) => {
    try {
        await axiosInstance.get('/v1/user/logout');
        dispatch(userActions.getLogout(null));

    } catch (error) {
        dispatch(userActions.getError(error.response.data.message));
    }
};
