import { ActionFunctionArgs, redirect } from "react-router-dom";
import { postJoin } from "../../Apis/apis";
import createActionFormData from "../../utils/createActionFormData";

const action = async ({ request }: ActionFunctionArgs) => {
  const data = await createActionFormData(request);
  const response = await postJoin(data);

  if (typeof response === "string") {
    return response;
  }

  return redirect("/login");
};

export default action;
