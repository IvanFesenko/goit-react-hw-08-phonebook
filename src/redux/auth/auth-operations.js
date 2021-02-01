import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  setAuthToket,
  authSingUp,
  authLogIn,
  authLogOut,
  authCurrentUser,
} from '../../services/contactsAPI';

const token = {
  set(token) {
    setAuthToket(`Bearer ${token}`);
  },
  unset() {
    setAuthToket(``);
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await authSingUp(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    console.log(credentials);
    const { data } = await authLogIn(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await authLogOut();
    token.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});
/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await authCurrentUser();
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
