import { tokenStorage } from 'utilities';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'auth',
    initialState: {
        user: undefined,
        userInfo: undefined
    },
    reducers: {
        onLogout: state => {
            tokenStorage.clear();
            state.user = undefined;
        },
        setUser: (state, { payload: user }) => {
            state.user = user;
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
