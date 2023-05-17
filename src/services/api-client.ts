import axios, { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next?: string | null;
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4a73299c3126473f874e0df06b8a4fda",
  },
});

export { CanceledError };

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default ApiClient;
