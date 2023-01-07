import { useQuery } from "@tanstack/react-query";
import {
  Outlet,
  useFetcher,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { getTodosQuery } from "../../apis/queries";
import TodoList from "../../components/Todo/TodoList";
import * as CS from "../../styles/CommonStyles";
import * as S from "./Todo.style";
import loader from "./loader";
import { useCallback } from "react";

const Todo = () => {
  // FIXME: need to change unknown typing
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof loader>>
  >;
  const {
    data: {
      data: { data },
    },
  } = useQuery({ ...getTodosQuery(), initialData }) as any;
  const fetcher = useFetcher();
  const navigate = useNavigate();

  const handleLogOutButton = useCallback(() => {
    localStorage.clear();
    navigate("/login");
  }, [navigate]);

  // TODO: need to optimize rendering
  // FIXME: input value isn't initailized after submitting Form.
  return (
    <S.Container>
      <S.TodoLogOutButton type="button" onClick={handleLogOutButton}>
        Log out
      </S.TodoLogOutButton>
      <S.TodoContainer>
        <TodoList list={data} />
        <Outlet />
        <fetcher.Form
          method="post"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "16px",
          }}
        >
          <CS.Input type="text" name="title" placeholder="title" />
          <CS.Textarea name="content" placeholder="content" />
          <CS.Button type="submit">Register</CS.Button>
        </fetcher.Form>
      </S.TodoContainer>
    </S.Container>
  );
};

export default Todo;
