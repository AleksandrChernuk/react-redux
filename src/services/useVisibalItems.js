import { useSelector } from "react-redux";
import { selectFilter, selectTodos } from "../redux/todos/todos-selectors";

export const useVisibalItems = () => {
  const items = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const visibalItems = items.filter((el) => el.name.includes(filter.toLowerCase()));
  return visibalItems;
};
