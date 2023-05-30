import { useSelector } from "react-redux";
import { selectTodos } from "../../redux/todos/todos-selectors";
import s from "./Todos.module.css";

export const Stats = () => {
  const items = useSelector(selectTodos);

  const total = items.length;

  return (
    <h3 className={s.title}>
      Общее кол-во: <span>{total}</span>
    </h3>
  );
};
