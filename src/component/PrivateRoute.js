import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectLoggedIn } from "../redux/auth/authSelectors";

export const PrivateRoute = ({ children }) => {
  const isLoading = useSelector(selectLoggedIn);

  return isLoading ? children : <Navigate to="/login" />;
};
