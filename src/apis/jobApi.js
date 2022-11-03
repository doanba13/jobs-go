import { axios } from 'libs';

const jsonType = { headers: { 'Content-Type': 'application/json' }, }

export const jobApi = {
    getAllJob: async () => {
        const { data } = await axios.get('/job/get-all?position_id=1');
        return data
    },
    getHotJob: async () => {
        const { data } = await axios.get('/job/job-high-salary');
        return data
    },
    getItJob: async () => {
        const { data } = await axios.get('/job/job-it');
        return data
    },
    getManagerJob: async () => {
        const { data } = await axios.get('/job/job-manager');
        return data
    },
    getInternJob: async () => {
        const { data } = await axios.get('/job/job-internship');
        return data
    },
    searchJob: async (query) => {
        const { data } = await axios.get(`/job/get-all?${query}`);
        return data
    },

    getjobDetail: async (id) => {
        const data = await axios.get(`/job/get-by-id/${id}`, jsonType);
        return data
    },
    applyJob: async (data) => axios.post('/job/apply', data, { headers: { 'Content-Type': 'multipart/form-data' }, })

}
