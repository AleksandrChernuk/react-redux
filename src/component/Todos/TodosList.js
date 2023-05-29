import { useDispatch, useSelector } from "react-redux";
import { selectFilter, selectTodos } from "../../redux/todos/todos-selectors";
import { useEffect } from "react";
import { fetchTodos, deleteTodos } from "../../redux/todos/todos-operation";
import s from "./Todos.module.css";
import { useVisibalItems } from "../../services/useVisibalItems";

export const TodosList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const visibalItems = useVisibalItems();

  return (
    <ul className={s.todosList}>
      {visibalItems.map((el) => (
        <li style={{ display: "flex", gap: "20px" }} className={s.todosItems} key={el.id}>
          <p>
            {el.name} : {el.number}
          </p>
          <button
            onClick={() => dispatch(deleteTodos(el.id))}
            type="button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              borderRadius: "10px",
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
