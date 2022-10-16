import { tokenStorage } from 'utilities';
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getSavedUser = async () => {
    const user = await AsyncStorage.getItem('jobgouser');
    return JSON.parse(user);
}

const slice = createSlice({
    name: 'auth',
    initialState: {
        user: getSavedUser().toString(),
        userInfo: undefined
    },
    reducers: {
        onLogout: state => {
            tokenStorage.clear();
            AsyncStorage.removeItem('jobgouser');
            state.user = undefined;
        },
        setUser: (state, { payload: user }) => {
            state.user = user;
            AsyncStorage.setItem('jobgouser', JSON.stringify(user));
        },
        setUserInfo: (state, { payload: userInfo }) => {
            state.userInfo = userInfo;
        },
    },
});

export const {
    onLogout,
    setUser,
    setUserInfo
} = slice.actions;

export const getUser = state => state.auth.user;
export const getUserInfo = state => state.auth.user.userInfo;

export default slice.reducer;
