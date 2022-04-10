import { ITodo } from 'models/ITodo';
import React, { FC } from 'react';

interface TodoItemProps {
  todo: ITodo;
  remove: (todo: ITodo) => void;
  update: (todo: ITodo) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, remove, update }) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(todo);
  };
  const handleUpdate = (e: React.MouseEvent) => {
    const title = prompt() || '';
    if (title.length) {
      update({ ...todo, title });
    }
  };

  const handleUpdateComplete = (e: React.MouseEvent) => {
    update({ ...todo, completed: !todo.completed });
  };

  return (
    <div className='todo'>
      <input type='checkbox' checked={todo.completed} onClick={handleUpdateComplete} />
      <div className={`todo-title ${todo.completed ? 'done' : ''}`} onClick={handleUpdate}>
        {todo.id}. {todo.title}
      </div>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default TodoItem;
