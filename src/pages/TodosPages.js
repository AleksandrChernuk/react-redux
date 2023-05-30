import { useState } from "react";

import { TodosForm } from "../component/Todos/TodosForm";
import { TodosFilter } from "../component/Todos/TodosFilter";
import { TodosList } from "../component/Todos/TodosList";
import ModalWindow from "../component/Modal/ModalWindow";
import s from "./TodosPagas.module.css";
import { Stats } from "../component/Todos/Stats";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const TodosPages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((s) => !s);

  return (
    <div>
      <div className={s.wrapper}>
        <TodosFilter />
        <Button variant="contained" color="success" size="large" onClick={toggleModal}>
          Add
        </Button>

        <Stats />
      </div>

      <TodosList />

      {isModalOpen && (
        <ModalWindow onClose={toggleModal}>
          <TodosForm onSave={toggleModal} />
        </ModalWindow>
      )}
    </div>
  );
};

export default TodosPages;
