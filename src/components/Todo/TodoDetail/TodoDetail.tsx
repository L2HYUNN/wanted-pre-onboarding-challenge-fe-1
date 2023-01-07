import { useFetcher, useLoaderData, useParams } from "react-router-dom";
import * as S from "./TodoDetail.style";
import loader from "./loader";
import { getTodoQuery } from "../../../apis/queries";
import { useQuery } from "@tanstack/react-query";

// TODO: change TodoDetail name to TodoDetail
// FIXME: creating histroy stack after using fetcher.Form deletAction
const TodoDetail = () => {
  const fetcher = useFetcher();
  const params = useParams();
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof loader>>
  >;
  const {
    data: {
      data: { data },
    },
  } = useQuery({ ...getTodoQuery(params.id!), initialData }) as any;

  return (
    <S.Container>
      <fetcher.Form
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <S.TodoTitle>Title</S.TodoTitle>
        <S.TodoInput type="text" value={data.title} />
        <S.TodoContent>Content</S.TodoContent>
        <S.TodoTextarea value={data.content} />
        <S.TodoEditButton type="button">Edit</S.TodoEditButton>
        <S.TodoDeleteButton type="submit">Delete</S.TodoDeleteButton>
      </fetcher.Form>
    </S.Container>
  );
};

export default TodoDetail;
