import { useState } from 'react';
import TodoList from '@/components/TodoItem';
import TodoForm from '@/components/TodoForm';
import type { TodoObjType } from '@/type/types.ts';
import { MESSAGES } from '@/consts';

function TodoMain() {
  const todoListsInit = [
    {
      id: '1',
      title: '買い物に行く',
    },
    {
      id: '2',
      title: '散歩する',
    },
  ];
  const [todos, setTodos] = useState(todoListsInit);
  const deleteTodo = (data: string) => {
    const newTodos = todos
      .filter((todo) => {
        if (todo.id !== data) {
          return todo;
        }
      })
      .map((todo) => {
        return todo;
      });
    setTodos(newTodos);
  };
  const addTodo = (newTodo: TodoObjType) => {
    const newTodolist = [...todos, newTodo];
    console.log(newTodo);
    setTodos(newTodolist);
  };
  return (
    <>
      {todos.length ? (
        <ul>
          {todos.map((todo) => {
            return <TodoList key={todo.id} todoInfo={todo} deleteTodo={deleteTodo} />;
          })}
        </ul>
      ) : (
        <p className='text-center fw-bold highlight'>{MESSAGES.nothingTodo}</p>
      )}
      <TodoForm addTodo={addTodo} />
    </>
  );
}

export default TodoMain;
