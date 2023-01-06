import { UseQueryOptions } from "@tanstack/react-query";
import { getTodos } from "./apis";

export const getTodoQuery = (): UseQueryOptions => ({
  queryKey: ["todos"],
  queryFn: async () => getTodos(),
});
