import { useSelector } from "react-redux";
import { selectTodos } from "../../redux/todos/todos-selectors";

export const Stats = () => {
  const items = useSelector(selectTodos);

  const total = items.length;

  return <div>Общее кол-во: {total}</div>;
};
