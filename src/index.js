import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/redux/store";
// import FilmSearch from './FilmSearch';
import App from "./App";
// import Pixabay from './Pixabay';
import "./index.css";
// import './index_FilmSearch.css';

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// import App from './App';

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <FilmSearch /> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* <Pixabay /> */}
    </BrowserRouter>
  </React.StrictMode>
);
