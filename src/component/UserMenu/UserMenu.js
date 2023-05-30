import defultAvatar from "./avatar.png";
import { selectUserName } from "../../redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authOperation";
import s from "./UserMenu.module.css";
import { Avatar, Typography, IconButton } from "@mui/material";
import Face4OutlinedIcon from "@mui/icons-material/Face4Outlined";
import LogoutIcon from "@mui/icons-material/Logout";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const avatar = defultAvatar;
  const name = useSelector(selectUserName);

  return (
    <div className={s.container}>
      <Avatar sx={{ width: 32, height: 32 }} alt="avatar">
        <Face4OutlinedIcon />
      </Avatar>

      <Typography variant="h5"> {name}</Typography>
      <IconButton
        color="primary"
        aria-label="logout"
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        <LogoutIcon color="success" />
      </IconButton>
    </div>
  );
};
