import { axios } from 'libs';

const URL = '/common';

export const commonApi = {
    getWordPackTotal: packInfo => {
        return axios.get(`${URL}/word-pack/total`, {
            params: { packInfo: JSON.stringify(packInfo) },
        });
    },
};
