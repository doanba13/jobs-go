import { axios } from 'libs';

const URL = '/games';

export const gameApi = {
    // correct word game
    getWordPackCWG: (
        type = '-1',
        level = '-1',
        specialty = '-1',
        topics = [],
        nQuestion = 50,
    ) => {
        return axios.get(`${URL}/correct-word/pack`, {
            params: {
                type,
                level,
                specialty,
                topics: JSON.stringify(topics),
                nQuestion,
            },
        });
    },

    // word match game
    getWordPackWordMatch: ({
        topics = [],
        type = '-1',
        level = '-1',
        specialty = '-1',
        nQuestion = 50,
    }) => {
        return axios.get(`${URL}/word-match/pack`, {
            params: {
                type,
                level,
                specialty,
                topics: JSON.stringify(topics),
                nQuestion,
            },
        });
    },

    // fast game
    getWordPackFG: (topic = 0) => {
        return axios.get(`${URL}/fast-game/pack`, {
            params: { topic },
        });
    },
};
