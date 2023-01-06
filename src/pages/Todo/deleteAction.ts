import { QueryClient } from "@tanstack/react-query";
import { ActionFunctionArgs, redirect } from "react-router-dom";
import { deleteTodo } from "../../apis/apis";

const deleteAction =
  (queryClient: QueryClient) =>
  async ({ params }: ActionFunctionArgs) => {
    if (params.id) {
      const response = await deleteTodo(params.id);

      if (typeof response === "string") return response;

      await queryClient.invalidateQueries(["todos"]);
      return redirect("/todo");
    }
  };

export default deleteAction;
