import { NavLink } from "react-router-dom";

const style = {
  nav: {
    display: "flex",
    gap: "10px",
  },
};

const Navigation = () => {
  return (
    <nav style={style.nav}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: "none",
        })}
      >
        Главная
      </NavLink>
      <NavLink
        to="/todo"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: "none",
        })}
      >
        Заметки
      </NavLink>
    </nav>
  );
};

export default Navigation;
