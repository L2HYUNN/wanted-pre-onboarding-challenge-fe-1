import { PostToDoReturnProps } from "../../../types/apiTypes";
import TodoIndex from "../TodoIndex";
import * as S from "./TodoList.style";

const TodoList = ({ list }: { list: PostToDoReturnProps[] }) => {
  return (
    <S.Container>
      <S.TodoTitle>ToDo List</S.TodoTitle>
      <S.TodoList>
        {list.map((todo) => {
          return (
            <TodoIndex
              key={todo.id}
              id={todo.id}
              title={todo.title}
            ></TodoIndex>
          );
        })}
      </S.TodoList>
    </S.Container>
  );
};

export default TodoList;
