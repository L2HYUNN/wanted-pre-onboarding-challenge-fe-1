import { QueryClient } from "@tanstack/react-query";
import { getTodosQuery } from "../../apis/queries";

const loader = (queryClient: QueryClient) => async () => {
  const query = getTodosQuery();

  if (query.queryKey) {
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  }
};

export default loader;
