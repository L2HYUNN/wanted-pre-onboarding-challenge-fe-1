import { Link } from "react-router-dom";
import * as S from "./TodoIndex.style";

interface TodoIndexProps {
  key: string;
  id: string;
  title: string;
}

const TodoIndex = ({ id, title }: TodoIndexProps) => {
  return (
    <S.TodoItem>
      <Link to={`${id}`}>
        <S.TodoIndex>{title}</S.TodoIndex>
      </Link>
    </S.TodoItem>
  );
};

export default TodoIndex;
