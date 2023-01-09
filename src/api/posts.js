// axios

import axios from 'axios';

const URL = 'http://localhost:5000';

const setPost = (inputTitle, inputContent, createdAt) => {
  return axios.post(`${URL}/posts`, {
    title: inputTitle,
    content: inputContent,
    createdAt: createdAt,
  });
};

const getPosts = params => {
  return axios.get(`${URL}/posts`, { params });
};

const getPostById = id => {
  return axios.get(`${URL}/posts/${id}`);
};

const createPost = data => {
  return axios.post(`${URL}/posts`, data);
};
const updataPost = (id, data) => {
  return axios.put(`${URL}/posts/${id}`, data);
};
const deletePost = id => {
  return axios.delete(`${URL}/posts/${id}`);
};

export { getPosts, setPost, getPostById, updataPost, createPost, deletePost };
// export const getData = axios.get('http://localhost:3000/posts');
