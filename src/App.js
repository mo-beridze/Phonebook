import React from "react";
import { useState, useEffect } from "react";
import Form from "./components/Form/ContactsView/Form";
import ContactList from "./components/Form/ContactsView/ContactList";
import s from "./components/Form/Main.module.css";
import Filter from "./components/Form/ContactsView/Filter";
import { Route, Routes } from "react-router-dom";
import RegisterView from "./components/Form/RegisterView";
import LoginView from "./components/Form/LoginView";
import NavBar from "./components/Form/NavBar";
import PageContactsView from "./components/Form/ContactsView/PageContactsView";
import authOperation from "./components/redux/auth/auth-operations";
import { Provider } from "react-redux";
import { store, persistor } from "./components/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "./components/redux/auth/auth-selector";
import HomePage from "./components/Form/HomePage";
import PublicRoute from "./components/Form/PublicRoute";
import PrivateRoute from "./components/Form/PrivateRoute";
import { createTheme, ThemeProvider } from "@mui/material";

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Raleway", "sans - serif"].join(","),
    },
  });
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getUserToken);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  useEffect(() => {
    if (token) {
      dispatch(authOperation.fetchCurrentUser());
    }
  }, []);
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
