import { useQuery } from "@tanstack/react-query";
import linksMock from "./../../mocks/links.json";

export const useGetLinks = () => {
  const response = useQuery({
    queryKey: ["links"],
    queryFn: () => linksMock.links,
  });

  return response;
};
