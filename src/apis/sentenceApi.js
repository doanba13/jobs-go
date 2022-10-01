import { axios } from 'libs';

const URL = '/sentence';

export const sentenceApi = {
    postContributeSentence: (sentence, mean, note, topics) => {
        return axios.post(`${URL}/contribute/add-sentence`, {
            sentence,
            mean,
            note,
            topics,
        });
    },

    getTotalSentences: (topics = []) => {
        return axios.get(`${URL}/total`, {
            params: { topics: JSON.stringify(topics) },
        });
    },

    getSentenceList: (page = 1, perPage = 20, topics = []) => {
        return axios.get(`${URL}/list`, {
            params: {
                page,
                perPage,
                topics: JSON.stringify(topics),
            },
        });
    },
};
