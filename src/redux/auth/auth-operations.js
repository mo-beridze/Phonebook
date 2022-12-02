import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorMessageSignup } from "./auth-slice";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

function formatError(error) {
  switch (error.response.data.errors.password.kind) {
    case "minlength":
      return "Password is shorter";

    default:
      return "";
  }
}

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials, { dispatch }) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    const errorMessage = formatError(error);
    dispatch(errorMessageSignup(errorMessage));
  }
});

const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  "contacts/fetchCurrentUser",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return state;
    }

    token.set(persistToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const operations = { register, login, logOut, fetchCurrentUser };

export default operations;
