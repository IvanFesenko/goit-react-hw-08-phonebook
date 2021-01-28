import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './reducers';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    phoneBook: reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;
