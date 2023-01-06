import { PostToDoReturnProps } from "../../../types/apiTypes";
import TodoItem from "../TodoItem";
import * as S from "./TodoList.style";

const TodoList = ({ list }: { list: PostToDoReturnProps[] }) => {
  return (
    <S.TodoList>
      {list.map((todo) => {
        return <TodoItem key={todo.id} id={todo.id} item={todo}></TodoItem>;
      })}
    </S.TodoList>
  );
};

export default TodoList;
