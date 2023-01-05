import { AxiosError, AxiosResponse } from "axios";
import { ActionFunctionArgs, redirect } from "react-router-dom";
import { postJoin } from "../../apis/apis";
import { PostFormReturnProps } from "../../types/apiTypes";
import createActionFormData from "../../utils/createActionFormData";

const action = async ({ request }: ActionFunctionArgs) => {
  const data = await createActionFormData(request);
  const response = (await postJoin(data)) as
    | AxiosResponse<PostFormReturnProps>
    | string;

  if (typeof response === "string") {
    return response;
  }

  return redirect("/login");
};

export default action;
