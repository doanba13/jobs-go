import { axios } from 'libs';

const URL = '/rank';

export const rankApi = {
    putScore: (name = '', score = 0) => {
        return axios.put(`${URL}/update`, { name, score });
    },

    getRanks: (name = '') => {
        return axios.get(`${URL}/leaderboard`, { params: { name } });
    },

    postRankLog: game => {
        return axios.post(`${URL}/log`, {
            game,
        });
    },

    getRankingLogsInDay: game => {
        return axios.get(`${URL}/log`, {
            params: {
                game,
            },
        });
    },
};
