import { PostToDoReturnProps } from "../../types/apiTypes";
import { useFetcher } from "react-router-dom";
import * as S from "./TodoItem.style";

interface TodoItemProps {
  key: string;
  id: string;
  item: PostToDoReturnProps;
}

// FIXME: creating histroy stack after using fetcher.Form deletAction
const TodoItem = ({ id, item }: TodoItemProps) => {
  const fetcher = useFetcher();

  return (
    <S.TodoItem>
      <fetcher.Form
        method="post"
        action={`${id}/delete`}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <S.TodoTitle>Title</S.TodoTitle>
        <S.TodoInput type="text" value={item.title} />
        <S.TodoContent>Content</S.TodoContent>
        <S.TodoTextarea value={item.content} />
        <S.TodoEditButton type="button">Edit</S.TodoEditButton>
        <S.TodoItemDeleteButton type="submit">Delete</S.TodoItemDeleteButton>
      </fetcher.Form>
    </S.TodoItem>
  );
};

export default TodoItem;
