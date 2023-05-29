import css from "./AppBar.module.css";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import { UserMenu } from "./UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../redux/auth/authSelectors";

const AppBar = () => {
  const isLoggin = useSelector(selectLoggedIn);
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggin ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
