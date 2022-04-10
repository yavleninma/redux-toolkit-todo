import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { ITodo } from 'models/ITodo';

export const todoAPI = createApi({
  reducerPath: 'todoAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Todo'],
  endpoints: (build) => ({
    fetchAllTodos: build.query<ITodo[], number>({
      query: (limit = 5) => ({
        url: '/todos',
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ['Todo'],
    }),
    createTodo: build.mutation<ITodo, ITodo>({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todo'],
    }),
    updateTodo: build.mutation<ITodo, ITodo>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: build.mutation<ITodo, ITodo>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'DELETE',
        body: todo,
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});
