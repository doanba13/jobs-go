import { axios } from 'libs';

export const accountApi = {
    registerAccount: async (userInfo) => {
        const { data } = await axios.post('/auth/register', userInfo, { headers: { 'Content-Type': 'multipart/form-data' }, });
        return data
    },

    login: async (userInfo) => {
        const { data } = await axios.post('/auth/login', userInfo, { headers: { 'Content-Type': 'multipart/form-data' }, });
        return data
    },

    getUserInfo: async () => {
        const data = await axios.get('/user/user-info');
        console.log(data)
        return data
    },

    updateuserInfo: async (updatedData) => {
        const data = await axios.post('/user/update-user', updatedData, { headers: { 'Content-Type': 'multipart/form-data' }, });
        console.log(data)
        return data
    },
};
