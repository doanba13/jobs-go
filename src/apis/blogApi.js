import { axios } from 'libs';

const URL = '/blog';

export const blogApi = {
    getBlogList: () => {
        return axios.get(`${URL}/blog-list`);
    },

    getBlogHtml: _id => {
        return axios.get(`${URL}/blog-html`, { params: { _id } });
    },
};
