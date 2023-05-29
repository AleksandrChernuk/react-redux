import { Routes, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import css from "./App.module.css";
import LoginPage from "./pages/LoginPage";
import AppBar from "./component/AppBar";
import { LoginForm } from "./component/LoginForm/LogInForm";
import { UserMenu } from "./component/UserMenu/UserMenu";
import TodosPages from "./pages/TodosPages";
import { useDispatch } from "react-redux";
import { currentUser } from "./redux/auth/authOperation";
import { PrivateRoute } from "./component/PrivateRoute";
import { PublickRoutes } from "./component/PublickRoutes";
import { HomePage } from "./pages/HomePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/todo"
          element={
            <Suspense>
              <PrivateRoute>
                <TodosPages />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path="/loginform"
          element={
            <PublickRoutes>
              <LoginPage />
            </PublickRoutes>
          }
        />

        <Route
          path="/login"
          element={
            <PublickRoutes>
              <LoginForm />
            </PublickRoutes>
          }
        />
        <Route path="/usermenu" element={<UserMenu />} />
      </Routes>
    </div>
  );
}

export default App;
