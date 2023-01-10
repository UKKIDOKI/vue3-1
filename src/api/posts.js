// axios

import { posts } from './index';

const getPosts = params => {
  return posts.get('/', { params });
};

const getPostById = id => {
  return posts.get(id);
};

const createPost = data => {
  return posts.post('', data);
};
const updataPost = (id, data) => {
  return posts.put(id, data);
};
const deletePost = id => {
  return posts.delete(id);
};

export { getPosts, getPostById, updataPost, createPost, deletePost };
