import defultAvatar from "./avatar.png";
import { selectUserName } from "../../redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authOperation";
import s from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const avatar = defultAvatar;
  const name = useSelector(selectUserName);

  return (
    <div className={s.container}>
      <img src={avatar} alt="avatar" width="20px" />
      <span>Добро пожаловать: {name}</span>
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Выйти
      </button>
    </div>
  );
};
