import axios from 'axios';

// Object.assign({ baseURL }, options);

// const instance = axios.create({
//   baseURL,
//   ...options,
// });

function create(baseURL) {
  // console.dir(options);
  const instance = axios.create({ baseURL });
  return instance;
}

// export const posts = create('http://localhost:5000/posts');
export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);

//developpment

//production
