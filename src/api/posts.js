// axios

import axios from 'axios';

const URL = 'http://localhost:3000';

const getData = () => {
  return axios.get(`${URL}/posts`);
};

const setPost = (inputTitle, inputContent, createdAt) => {
  return axios.post(`${URL}/posts`, {
    title: inputTitle,
    content: inputContent,
    createdAt: createdAt,
  });
};

export { getData, setPost };
// export const getData = axios.get('http://localhost:3000/posts');
