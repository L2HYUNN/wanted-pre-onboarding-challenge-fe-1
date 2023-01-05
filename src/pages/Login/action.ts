import { AxiosResponse } from "axios";
import { ActionFunctionArgs, redirect } from "react-router-dom";
import { postLogin } from "../../apis/apis";
import { PostFormReturnProps } from "../../types/apiTypes";
import createActionFormData from "../../utils/createActionFormData";

const action = async ({ request }: ActionFunctionArgs) => {
  const data = await createActionFormData(request);
  const response = (await postLogin(data)) as
    | AxiosResponse<PostFormReturnProps>
    | string;

  if (typeof response === "string") {
    return response;
  }

  localStorage.setItem("token", response.data.token);

  return redirect("/");
};

export default action;
