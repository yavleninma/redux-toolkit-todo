import { ITodo } from 'models/ITodo';
import React, { useEffect } from 'react';
import { todoAPI } from 'services/TodoService';
import TodoItem from './TodoItem';

const TodoContainer = () => {
  const [limit, setLimit] = React.useState(50);
  const { data: todos, error, isLoading } = todoAPI.useFetchAllTodosQuery(limit);
  const [createTodo, {}] = todoAPI.useCreateTodoMutation();
  const [updateTodo, {}] = todoAPI.useUpdateTodoMutation();
  const [deleteTodo, {}] = todoAPI.useDeleteTodoMutation();

  const handleCreate = async () => {
    const title = prompt() || '';
    if (title.length) {
      await createTodo({ title, completed: false } as ITodo);
    }
  };

  const handleRemove = (todo: ITodo) => {
    deleteTodo(todo);
  };

  const handleUpdate = (todo: ITodo) => {
    updateTodo(todo);
  };

  return (
    <div>
      <div className='todo__list'>
        <button onClick={handleCreate}>Add new</button>
        {isLoading && <h1>loading...</h1>}
        {error && <h1>error</h1>}
        {todos?.map((todo, i) => (
          <TodoItem todo={todo} key={i} remove={handleRemove} update={handleUpdate} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
