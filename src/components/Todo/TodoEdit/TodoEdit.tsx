import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Form, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { getTodoQuery } from "../../../apis/queries";
import loader from "./loader";
import * as S from "./TodoEdit.style";

const TodoEdit = () => {
  const params = useParams();
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof loader>>
  >;
  const {
    data: {
      data: { data },
    },
  } = useQuery({ ...getTodoQuery(params.id!), initialData }) as any;
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>(data.title);
  const [content, setContent] = useState<string>(data.content);

  return (
    <S.Container>
      <Form
        method="put"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <S.TodoTitle>Title</S.TodoTitle>
        <S.TodoInput
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.TodoContent>Content</S.TodoContent>
        <S.TodoTextarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <S.TodoEditButton type="submit">Submit</S.TodoEditButton>
        <S.TodoDeleteButton type="button" onClick={() => navigate(-1)}>
          Cancel
        </S.TodoDeleteButton>
      </Form>
    </S.Container>
  );
};

export default TodoEdit;
