import Axios from 'axios';
import queryString from 'query-string';
import { Config } from 'config';
import { tokenStorage } from 'utilities';

export const axios = Axios.create({
    baseURL: Config.API_URL,
    headers: {
        'content-type': 'application/json',
    },
    withCredentials: true,
    paramsSerializer: params => queryString.stringify(params),
});

axios.interceptors.request.use(
    async config => {
        const token = await tokenStorage.get();
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        throw error;
    },
);

axios.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        const message = selectErrorKeyOrMessage(error);
        const status = selectErrorCode(error);
        return Promise.reject({ message, status });
    },
);

const selectErrorKeyOrMessage = error => {
console.log('🚀 ~ file: axios.js ~ line 40 ~ error', error)
    if (error && error.response && error.response.data) {
        const data = error.response.data;

        if (data && data.message) {
            return data.message;
        }

        return String(data);
    }

    return error.message || 'An error occurred, please try again';
};

export const selectErrorCode = error => {
    if (error && error.response && error.response.status) {
        return error.response.status;
    }
    return 500;
};
