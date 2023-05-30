import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authOperation";
import s from "./LoginForm.module.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

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
      <TextField
        label="Email"
        type="email"
        id="email"
        name="email"
        value={email}
        defaultValue="Normal"
        onChange={handleChange}
        required
      />
      {/* <label className={s.label}>
        Email
        <input type="email" required onChange={handleChange} placeholder="@email.com" />
      </label> */}

      <TextField
        label="Password"
        type="password"
        id="password"
        name="password"
        value={password}
        defaultValue="Normal"
        onChange={handleChange}
        required
      />
      {/* <label className={s.label}>
        Password
        <input type="text" name="password" value={password} onChange={handleChange} />
      </label> */}
      <Button variant="contained" color="success" type="submit">
        Success
      </Button>
    </form>
  );
};
