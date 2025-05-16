import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

export const login = async (credentials) => {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
};

export const signup = async (credentials) => {
    const response = await axiosInstance.post('/auth/signup', credentials);
    return response.data;
};

export const logout = async () => {
    const response = await axiosInstance.post('/auth/logout');
    return response.data;
};

export const saveDraft = async (blogData) => {
    const payload = { ...blogData };
    if (payload.id) {
        payload._id = payload.id;
        delete payload.id;
    }
    const response = await axiosInstance.post('/blogs/save-draft', payload);
    return response.data;
};

export const publishBlog = async (blogData) => {
    const payload = { ...blogData };
    if (payload.id) {
        payload._id = payload.id;
        delete payload.id;
    }
    const response = await axiosInstance.post('/blogs/publish', payload);
    return response.data;
};

export const getBlogs = async () => {
    const response = await axiosInstance.get('/blogs');
    return response.data;
};

export const getBlog = async (id) => {
    const response = await axiosInstance.get(`/blogs/${id}`);
    return response.data;
};

export const deleteBlog = async (id) => {
    const response = await axiosInstance.delete(`/blogs/${id}`);
    return response.data;
};