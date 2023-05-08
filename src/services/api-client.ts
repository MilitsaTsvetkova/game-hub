import axios, { CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4a73299c3126473f874e0df06b8a4fda",
  },
});

export { CanceledError };
