import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { ITodo } from './ITodo';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Nav from './Nav';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    backgroundColor: '#FFEED5',
    minHeight: '100vh'
  }
});

function App() {
  const initTodoList: Array<ITodo> = [
    {
      id: 0,
      title: '牛乳を買う',
      completed: false,
      deleted: false
    },
    {
      id: 1,
      title: '牛乳をコップに入れる',
      completed: false,
      deleted: false
    },
    {
      id: 2,
      title: '牛乳を飲む',
      completed: false,
      deleted: false
    }];
  const [todoList, setTodoList] = useState<Array<ITodo>>(initTodoList);
  const classes = useStyles();

  const setTodoListFunc = (title: string) => {
    setTodoList(todoList.concat({
      id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
      title: title,
      completed: false,
      deleted: false
    }));
  }

  const updateTodoFunc = (updatedTodo: ITodo) => {
    setTodoList(prevTodoList => {
      const list = prevTodoList.map(todo => {
        if (todo.id !== updatedTodo.id) return todo;
        return updatedTodo;
      }).filter(todo => !todo.deleted);
      return list;
    });
  }

  return (
    <Router>
      <div className={classes.root}>
        <Nav todoList={todoList} setTodoListFunc={setTodoListFunc} updateTodoFunc={updateTodoFunc} />
      </div>
    </Router>
  );
}

export default App;
