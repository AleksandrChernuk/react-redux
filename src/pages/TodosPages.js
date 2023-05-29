import { useState } from "react";

import { TodosForm } from "../component/Todos/TodosForm";
import { TodosFilter } from "../component/Todos/TodosFilter";
import { TodosList } from "../component/Todos/TodosList";
import ModalWindow from "../component/Modal/ModalWindow";
import s from "./TodosPagas.module.css";
import { Stats } from "../component/Todos/Stats";

const TodosPages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((s) => !s);

  return (
    <div>
      <div className={s.wrapper}>
        <TodosFilter />
        <button type="button" onClick={toggleModal} style={{ padding: "10px", borderRadius: "10px" }}>
          +
        </button>
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
