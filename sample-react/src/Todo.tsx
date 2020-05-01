import React from 'react';
import { Button, Checkbox, makeStyles } from '@material-ui/core';
import { ITodo } from './ITodo';

interface Props {
  todo: ITodo,
  updateTodoFunc: (updatedTodo: ITodo) => void
}

const useStyles = makeStyles(theme => ({
  completed: {
    textDecorationLine: 'line-through'
  },
  notCompleted: {
    textDecorationLine: 'none'
  }
}));

const Todo: React.FC<Props> = ({ todo, updateTodoFunc }) => {
  const classes = useStyles();

  const handleDeleteButtonClicked = () => {
    updateTodoFunc({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      deleted: !todo.deleted
    });
  }

  const handleChecked = () => {
    updateTodoFunc({
      id: todo.id,
      title: todo.title,
      completed: !todo.completed,
      deleted: todo.deleted
    });
  }

  return (
    <div>
      <Checkbox
        onChange={handleChecked}
        color="default"
        value="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        checked={todo.completed}
      />
      <span className={todo.completed ? classes.completed : classes.notCompleted}>
        {todo.title}
      </span>
      <Button variant="contained" color="secondary" onClick={handleDeleteButtonClicked}>
        削除
      </Button>
    </div>
  );
}

export default Todo;
