import { QueryClient } from "@tanstack/react-query";
import { getTodoQuery } from "../../apis/queries";

const loader = (queryClient: QueryClient) => async () => {
  const query = getTodoQuery();

  if (query.queryKey) {
    console.log("loader working");
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  }
};

export default loader;
