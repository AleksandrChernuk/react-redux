import { useDispatch } from "react-redux";
import { toogleFilter } from "../../redux/todos/todos-actions";
import { TextField } from "@mui/material";

export const TodosFilter = () => {
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { value } = e.target;
    dispatch(toogleFilter(value));
  };

  return (
    <div>
      <TextField size="small" label="Фильтр Контактов" type="text" onChange={onHandleChange} />
    </div>
  );
};
