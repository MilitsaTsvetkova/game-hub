import { useQuery } from "@tanstack/react-query";
import { platforms } from "../data/platforms";
import ApiClient from "../services/api-client";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
const apiClient = new ApiClient<Platform>("platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
