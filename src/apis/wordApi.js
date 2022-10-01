import { axios } from 'libs';

const URL = '/word';

export const wordApi = {
    postContributeWord: wordInfor => {
        return axios.post(`${URL}/contribute/add-word`, { ...wordInfor });
    },

    getCheckWordExistence: (word, type) => {
        return axios.get(`${URL}/exist`, { params: { word, type } });
    },

    // get word, type, phonetic, mean
    getWordList: (page = 1, perPage = 8, packInfo, sortType = 'rand') => {
        return axios.get(`${URL}/pack`, {
            params: {
                page,
                perPage,
                packInfo: JSON.stringify(packInfo),
                sortType,
            },
        });
    },

    getSearchWord: (word = '', isCompact = false) => {
        return axios.get(`${URL}/search-word`, {
            params: { word, isCompact },
        });
    },

    getWordDetails: (word = '') => {
        return axios.get(`${URL}/word-details`, { params: { word } });
    },

    getUserFavoriteList: (page = 0, perPage = 20, sortType = 'rand') => {
        return axios.get(`${URL}/favorite-list`, {
            params: { page, perPage, sortType },
        });
    },
};
