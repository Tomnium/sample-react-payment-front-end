import axios from 'axios';

let apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-type': 'application/json; charset=utf-8'
  }
});

export default apiClient;