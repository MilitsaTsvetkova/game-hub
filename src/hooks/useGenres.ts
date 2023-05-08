import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new ApiClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    staleTime: 24 * 60 * 60 * 1000, //24hours
    initialData: genres,
    queryFn: apiClient.getAll,
  });
export default useGenres;
