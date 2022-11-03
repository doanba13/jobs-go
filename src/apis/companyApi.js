import { axios } from 'libs';

export const companyApi = {
    getAllCompany: async () => {
        const { data } = await axios.get('/company/get-all');
        return data;
    },
    getCompanyDetail: async (id) => {
        const { data } = await axios.get(`/company/get-by-id/${id}`);
        return data;
    },
    getCompanyJobs: async (id) => {
        const { data } = await axios.get(`/company/get-all-job/${id}`);
        return data;
    },

}
