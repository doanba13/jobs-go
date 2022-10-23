import { axios } from 'libs';

const jsonType = { headers: { 'Content-Type': 'application/json' }, }

export const jobApi = {
    getAllJob: async () => {
        const { data } = await axios.get('/job/get-all?position_id=1');
        return data
    },
    getItJob: async () => {
        const { data } = await axios.get('/job/job-it');
        return data
    },
    getjobDetail: async (id) => {
        const data = await axios.get(`/job/get-by-id/${id}`, jsonType);
        return data
    },
}
