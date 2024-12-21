import type { TodoFormType, TodoObjType } from '@/type/types.ts';
import { nanoid } from 'nanoid';
import { MESSAGES } from '@/consts';

function TodoForm(props: TodoFormType) {
  const { addTodo } = props;
  const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoTitleEl = document.querySelector('.todoTitle') as HTMLInputElement | null;
    if (todoTitleEl) {
      const todoTitle = todoTitleEl.value;
      const todoObj: TodoObjType = {
        id: nanoid(),
        title: todoTitle,
      };
      addTodo(todoObj);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={createTodo}>
          <input type='text' className='todoTitle' />
          <button>{MESSAGES.add}</button>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
