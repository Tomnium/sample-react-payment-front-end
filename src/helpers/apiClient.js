import axios from 'axios';

export let instance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-type': 'application/json; charset=utf-8'
  }
});