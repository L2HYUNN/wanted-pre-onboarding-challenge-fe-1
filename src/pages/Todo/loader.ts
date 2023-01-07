import { QueryClient } from "@tanstack/react-query";
import { redirect } from "react-router-dom";
import { getTodosQuery } from "../../apis/queries";
import tokenLoader from "../../utils/tokenLoader";

const loader = (queryClient: QueryClient) => async () => {
  const query = getTodosQuery();
  const token = tokenLoader();

  if (!token) return redirect("/login");

  if (query.queryKey) {
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  }
};

export default loader;
