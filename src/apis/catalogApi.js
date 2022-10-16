import { axios } from 'libs';

export const catalogApi = {
    getCatalog: async () => {
        const { data } = await axios.get('/job/get-all');
        return data
    },
};
