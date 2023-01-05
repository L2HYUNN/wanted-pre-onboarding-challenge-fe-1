import { Form, useActionData } from "react-router-dom";
import * as CS from "../../styles/CommonStyles";

const Join = () => {
  const errorMessage = useActionData() as string;
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
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]$"
          required
        ></CS.Input>
        <CS.Input
          type="password"
          name="password"
          minLength={8}
          required
        ></CS.Input>
        <CS.Button type="submit">Join</CS.Button>
      </Form>
      <CS.ErrorMessage>{errorMessage}</CS.ErrorMessage>
    </div>
  );
};

export default Join;
