import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

// INFO: Sets default content-type to all requests
apiClient.interceptors.request.use(
  config => ({
    ...config,
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...config.params,
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
    }
  }),
  error => Promise.reject(error),
);

// INFO: delete is reserved word
const { get, post, put, delete: destroy, patch } = apiClient;

export { get, post, put, destroy, patch };
