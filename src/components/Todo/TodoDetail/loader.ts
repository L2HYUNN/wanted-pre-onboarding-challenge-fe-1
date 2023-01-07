import { QueryClient } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "react-router-dom";
import { getTodoQuery } from "../../../apis/queries";

// TODO: find way to remove 'if' to guarantee type not undefined
const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    if (params.id) {
      const query = getTodoQuery(params.id);

      if (query.queryKey) {
        return (
          queryClient.getQueryData(query.queryKey) ??
          (await queryClient.fetchQuery(query))
        );
      }
    }
  };

export default loader;
