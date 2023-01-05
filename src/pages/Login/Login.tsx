import { useEffect } from "react";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import * as CS from "../../styles/CommonStyles";

const Login = () => {
  const token = useLoaderData() as string;
  const errorMessage = useActionData() as string;
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/");
  }, [navigate, token]);

  return (
    <div>
      <Form
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px",
        }}
      >
        <CS.Input
          type="text"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        ></CS.Input>
        <CS.Input
          type="password"
          name="password"
          minLength={8}
          required
        ></CS.Input>
        <CS.Button type="submit">Login</CS.Button>
      </Form>
      <CS.ErrorMessage>{errorMessage}</CS.ErrorMessage>
    </div>
  );
};

export default Login;
