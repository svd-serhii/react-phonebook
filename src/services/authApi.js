import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

export const signup = async credentials => {
  const { data } = await instance.post('/users/signup', credentials);
  token.set(data.token);
  return data;
};

export const login = async credentials => {
  const { data } = await instance.post('/users/login', credentials);
  token.set(data.token);
  return data;
};

export const logout = async () => {
  await instance.post('/users/logout');
  token.unset();
};

export const getCurrent = async persistedToken => {
  token.set(persistedToken);
  const { data } = await instance.get('/users/current');
  return data;
};

export default instance;
