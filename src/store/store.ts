import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { todoAPI } from 'services/TodoService';

import userReducer from 'store/reducers/UserSlice';

const rooReducer = combineReducers({ userReducer, [todoAPI.reducerPath]: todoAPI.reducer });

export const setupStore = () => {
  return configureStore({
    reducer: rooReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rooReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
