import { useState } from "react";
import s from "./Todos.module.css";
import { useDispatch } from "react-redux";
import { addTodos } from "../../redux/todos/todos-operation";
import { TextField } from "@mui/material";
import { Button, Box } from "@mui/material";

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
      <h3 style={{ margin: "0" }}> Дотавить контакт</h3>
      <form></form>
      <form onSubmit={handleSubmit} className={s.form}>
        <TextField
          label="Введите имя"
          variant="standard"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <TextField
          variant="standard"
          label="Введите номер"
          type="tel"
          name="tel"
          value={number}
          onChange={handleChange}
        />

        <Button variant="contained" color="success" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};
