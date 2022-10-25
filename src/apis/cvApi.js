import { axios } from 'libs';

export const cvApi = {
    createCv: async (cvDats) => await axios.post('/cv/create', cvDats)
};
