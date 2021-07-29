import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

instance.interceptors.request.use((config) => config, (error) => error);
instance.interceptors.response.use((config) => config, (error) => error);
export default instance;
