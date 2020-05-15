
import axios from 'axios';

export function getHotApiInfo(params) {
  return axios.post('/apis/getHotApiInfo', params);
}

export function getApiInfo(params) {
  return axios.post('/apis/getApiInfo', params);
}

export function deleteApi(params) {
  return axios.post('/apis/deleteApi', params);
}

export function createApi(params) {
  return axios.post('/apis/createApi', params);
}

export function updateApi(params) {
  return axios.post('/apis/updateApi', params);
}

export function testApi(params) {
  return axios.post('/apis/testApi', params);
}
export default null;
