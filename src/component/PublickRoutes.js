import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectLoggedIn } from "../redux/auth/authSelectors";

export const PublickRoutes = ({ children }) => {
  const authToken = useSelector(selectLoggedIn);

  return !authToken ? children : <Navigate to="/" />;
};
