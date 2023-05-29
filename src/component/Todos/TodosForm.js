import { useState } from "react";
import s from "./Todos.module.css";
import { useDispatch } from "react-redux";
import { addTodos } from "../../redux/todos/todos-operation";

export const TodosForm = ({ onSave }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);

      case "tel":
        return setNumber(value);

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || number.trim() === "") {
      alert("error");
    }
    dispatch(addTodos({ name, number }));
    setName("");
    setNumber("");
    onSave();
  };

  return (
    <div>
      <h3> Дотавить контакт</h3>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Введите имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label className={s.label}>
          Введите номер
          <input type="tel" name="tel" value={number} onChange={handleChange} />
        </label>
        <button className={s.button}>Add</button>
      </form>
    </div>
  );
};
