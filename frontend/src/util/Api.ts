/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const get = (url:string, config = {}) => instance.get(url, config);
const post = (url:string, data:any, config = {}) => instance.post(url, data, config);
const put = (url:string, data:any, config = {}) => instance.put(url, data, config);
const patch = (url:string, data:any, config = {}) => instance.patch(url, data, config);
const del = (url:string, config = {}) => instance.delete(url, config);

export { get, post, put, patch, del };