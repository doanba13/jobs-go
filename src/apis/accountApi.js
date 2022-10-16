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
};
