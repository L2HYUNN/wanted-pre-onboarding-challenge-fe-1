import { UseQueryOptions } from "@tanstack/react-query";
import { getTodo, getTodos } from "./apis";

export const getTodosQuery = (): UseQueryOptions => ({
  queryKey: ["todos"],
  queryFn: async () => getTodos(),
});

export const getTodoQuery = (id: string): UseQueryOptions => ({
  queryKey: ["todo", `${id}`],
  queryFn: async () => getTodo(id),
});
