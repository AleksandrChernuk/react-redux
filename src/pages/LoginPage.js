import { useState } from "react";
import s from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { regist } from "../redux/auth/authOperation";

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
        <label className={s.label}>
          Name
          <input type="text" name="name" value={name} onChange={onHandleChange} />
        </label>
        <label className={s.label}>
          Email
          <input type="email" name="email" value={email} onChange={onHandleChange} required />
        </label>
        <label className={s.label}>
          Password
          <input type="text" name="password" value={password} onChange={onHandleChange} required />
        </label>
        <button className={s.button}>Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
