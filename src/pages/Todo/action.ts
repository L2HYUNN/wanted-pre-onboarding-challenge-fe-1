import { QueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ActionFunctionArgs } from "react-router-dom";
import { postCreateTodo } from "../../apis/apis";
import { PostToDoReturnProp } from "../../types/apiTypes";
import createActionFormData from "../../utils/createActionFormData";

const action =
  (queryClient: QueryClient) =>
  async ({ request }: ActionFunctionArgs) => {
    const data = await createActionFormData(request);
    const response = (await postCreateTodo(data)) as
      | AxiosResponse<PostToDoReturnProp>
      | string;

    if (typeof response === "string") {
      return response;
    }

    await queryClient.invalidateQueries(["todos"]);

    return response;
  };

export default action;
