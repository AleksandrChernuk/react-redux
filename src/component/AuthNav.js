import { NavLink } from "react-router-dom";

const style = {
  nav: {
    display: "flex",
    gap: "10px",
  },
};

const AuthNav = () => {
  return (
    <div style={style.nav}>
      <NavLink
        to="loginform"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: "none",
        })}
      >
        Login Form
      </NavLink>
      <NavLink
        to="login"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: "none",
        })}
      >
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNav;
