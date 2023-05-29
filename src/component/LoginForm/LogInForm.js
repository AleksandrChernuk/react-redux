import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authOperation";
import s from "./LoginForm.module.css";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "password":
        return setPassword(value);

      case "email":
        return setEmail(value);

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ password, email }));
    setPassword("");
    setEmail("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Email
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
          placeholder="____@email.com
        "
        />
      </label>
      <label className={s.label}>
        Password
        <input type="text" name="password" value={password} onChange={handleChange} />
      </label>
      <button className={s.button}>Submit</button>
    </form>
  );
};
