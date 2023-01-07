import { QueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ActionFunctionArgs, redirect } from "react-router-dom";
import { putUpdateTodo } from "../../../apis/apis";
import { PostToDoReturnProp } from "../../../types/apiTypes";
import createActionFormData from "../../../utils/createActionFormData";

const action =
  (queryClient: QueryClient) =>
  async ({ params, request }: ActionFunctionArgs) => {
    if (params.id) {
      const data = await createActionFormData(request);
      const response = (await putUpdateTodo({ id: params.id, data })) as
        | AxiosResponse<PostToDoReturnProp>
        | string;

      if (typeof response === "string") return response;

      await queryClient.invalidateQueries(["todos"]);
      return redirect(`/todo/${params.id}`);
    }
  };

export default action;
