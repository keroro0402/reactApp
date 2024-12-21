import type { TodoListType } from '@/type/types.ts';
import { MESSAGES } from '@/consts';
function TodoList(props: TodoListType) {
  const { todoInfo, deleteTodo } = props;
  const completeTodo = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    deleteTodo(target.id);
  };
  return (
    <>
      <div className='listItem'>
        <span className='listTitle'>{todoInfo.title}</span>
        <input value={MESSAGES.complete} type='button' onClick={completeTodo} id={String(todoInfo.id)} />
      </div>
    </>
  );
}

export default TodoList;
