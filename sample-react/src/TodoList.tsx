import React from 'react';
import Todo from './Todo'
import { ITodo } from './ITodo'

interface Props {
  todoList: ITodo[],
  updateTodoFunc: (updatedTodo: ITodo) => void
}

const TodoList: React.FC<Props> = ({ todoList, updateTodoFunc }) => {
  return (
    <div>
      {todoList.filter(todo => !todo.deleted).map((todo, index) => {
        return (<Todo todo={todo} key={index} updateTodoFunc={updateTodoFunc} />);
      })}
    </div>
  );
}

export default TodoList;
