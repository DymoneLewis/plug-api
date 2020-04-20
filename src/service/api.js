
import axios from 'axios';

export function getApiInfo() {
  return axios.get('/apis/getApiInfo');
}
export default null;
