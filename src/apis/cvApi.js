import { axios } from 'libs';

export const cvApi = {
    createCv: async (cvDats) => await axios.post('/cv/create', cvDats),

    updateCv: async (cvDats) => await axios.post('/cv/update', cvDats),

    listAllCv: async () => await axios.get('/cv/get-all'),

    getCvDetail: async (id) => {
        const { data } = await axios.get(`/cv/view-by-id/${id}`)
        return data
    }
};
