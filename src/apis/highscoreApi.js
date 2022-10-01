import { axios } from 'libs';

const URL = '/highscore';

export const highscoreApi = {
    putUpdateHighscore: (name = '', score = 0) => {
        return axios.put(`${URL}/update`, { name, score });
    },

    getLeaderboard: (name = '') => {
        return axios.get(`${URL}/leaderboard`, { params: { name } });
    },
};
