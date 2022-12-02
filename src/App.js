import React from "react";
import { useEffect } from "react";
import s from "../src/Main.module.css";
import { Route, Routes } from "react-router-dom";
import RegisterView from "../src/Pages/Register Page/RegisterView";
import LoginView from "../src/Pages/Login Page/LoginView";
import NavBar from "./Navigation/NavBar";
import PageContactsView from "./Pages/Contacts View Pages/PageContactsView";
import authOperation from "./redux/auth/auth-operations";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "./redux/auth/auth-selector";
import HomePage from "./Pages/Home Page/HomePage";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import { createTheme, ThemeProvider } from "@mui/material";

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Space Grotesk", "sans-serif"].join(","),
    },
  });
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getUserToken);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  useEffect(() => {
    if (token) {
      dispatch(authOperation.fetchCurrentUser());
    }
  }, [dispatch, token]);
  return (
    !isFetchingCurrentUser && (
      <ThemeProvider theme={theme}>
        <div>
          <NavBar />
          <main className={s.main_wrapper}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <Routes>
                  <Route path="/" element={<HomePage />}></Route>
                  <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterView />} restricted></Route>
                    <Route path="/login" element={<LoginView />} restricted></Route>
                  </Route>
                  <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<PageContactsView />}></Route>
                  </Route>
                </Routes>
              </PersistGate>
            </Provider>
          </main>
        </div>
      </ThemeProvider>
    )
  );
}
