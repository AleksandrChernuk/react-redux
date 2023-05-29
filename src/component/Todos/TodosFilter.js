import { useDispatch } from "react-redux";
import { toogleFilter } from "../../redux/todos/todos-actions";

export const TodosFilter = () => {
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { value } = e.target;
    dispatch(toogleFilter(value));
  };

  return (
    <div>
      <h3 style={{ margin: "0", padding: "0" }}>Фильтр Контактов</h3>
      <label>
        <input type="text" style={{ padding: "10px" }} onChange={onHandleChange} />
      </label>
    </div>
  );
};
