import { useQuery } from "@tanstack/react-query";
import { useFetcher, useLoaderData } from "react-router-dom";
import { getTodoQuery } from "../../apis/queries";
import TodoList from "../../components/Todo/TodoList";
import * as CS from "../../styles/CommonStyles";
import * as S from "./Todo.style";
import loader from "./loader";

const Todo = () => {
  // FIXME: need to change unknown typing
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof loader>>
  >;
  const {
    data: {
      data: { data },
    },
  } = useQuery({ ...getTodoQuery(), initialData }) as any;
  const fetcher = useFetcher();

  // TODO: need to optimize rendering
  // FIXME: input value isn't initailized after submitting Form.
  return (
    <S.Container>
      <TodoList list={data} />
      <fetcher.Form
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "15px",
        }}
      >
        <CS.Input type="text" name="title" placeholder="title" />
        <CS.Textarea name="content" placeholder="content" />
        <CS.Button type="submit">Register</CS.Button>
      </fetcher.Form>
    </S.Container>
  );
};

export default Todo;
