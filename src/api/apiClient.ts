import axios from 'axios';
import Config from "../config";
// import { MessagesKit } from '../Kits';
// import { get } from 'lodash';
const ApiClient = axios.create({
  baseURL: Config.apiUrl,
});

const formatError = (err: any) => {
  const data = {};
  // const data = get(err, 'response.data', null);
  if (data) {
    if (typeof data === 'object') {
      return (
        Object.keys(data)
          // .map((key) => (typeof data[key] === 'string' ? data[key] : JSON.stringify(data[key]).replace(/[^a-zA-Z ]/g, '')))
          .join(' ')
      );
    }
    return data;
  }
  // return MessagesKit.global.errorOccured;
};

export { formatError };

ApiClient.interceptors.response.use(
  response => Promise.resolve(response),
  error => Promise.reject(formatError(error)),
);

export default ApiClient;
