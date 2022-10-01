import { Config } from 'config';
import { axios } from 'libs';
const URL = '/flashcard';

export const flashcardApi = {
    getWordPack: (page = 1, perPage = 8, packInfo) => {
        return axios.get(`${URL}/word-pack`, {
            params: { page, perPage, packInfo: JSON.stringify(packInfo) },
        });
    },

    getUnLearnedWords: topicId => {
        return axios.get(`${URL}/word-unlearned/${topicId}`);
    },

    learnWord: ({ topicId, wordId }) => {
        return axios.post(`${URL}/word-learned`, {
            topicId,
            wordId,
        });
    },

    cancelReviewWords: topicId => {
        return axios.post(`${URL}/word-review-log/${topicId}`, {
            status: Config.REVIEW_STATUS_LOGS.CANCELLED,
        });
    },

    postReviewWords: (topicId, data) => {
        return axios.post(`${URL}/word-review-log/${topicId}`, data);
    },

    getMostRecentFlashCardsReviewLog: topicId => {
        return axios.get(`${URL}/word-review-log/${topicId}`);
    },

    getWordsLearnedToReview: topicId => {
        return axios.get(`${URL}/word-review/${topicId}`);
    },
};
