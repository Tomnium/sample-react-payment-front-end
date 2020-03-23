import axios from 'axios';

let apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-type': 'application/json; charset=utf-8'
  }
});

export function setAuthHeader(token) {
  try {
    localStorage.setItem('UserToken', token);
  } catch (error) {
    throw(error);
  }
  apiClient.defaults.headers.common['x-access-token'] = token;
}

export function removeToken() {
  localStorage.removeItem('UserToken');
}

export default apiClient;