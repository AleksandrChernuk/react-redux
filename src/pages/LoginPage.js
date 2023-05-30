import { useState } from "react";
import s from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { regist } from "../redux/auth/authOperation";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        return setName(value);

      case "email":
        return setEmail(value);

      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(regist({ name, email, password }));
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div>
      <h1>Страница регистрации пользователя</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <TextField label="Name" name="name" value={name} onChange={onHandleChange} type="text" />

        <TextField label="Email" type="email" name="email" value={email} onChange={onHandleChange} required />

        <TextField label="Password" type="text" name="password" value={password} onChange={onHandleChange} required />

        <Button variant="contained" color="success" type="button">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
