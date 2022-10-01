import { axios } from 'libs';

const URL = '/topic';

export const topicApi = {
    getTopics: () => {
        return axios.get(`${URL}/list`);
    },
};
