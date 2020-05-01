import { AppBar, Tabs, Tab } from '@material-ui/core';
import React from 'react';
import InputArea from './InputArea';
import TodoList from './TodoList';
import { ITodo } from './ITodo';
import {
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import Hello from './Hello';

interface Props {
  todoList: ITodo[],
  updateTodoFunc: (updatedTodo: ITodo) => void,
  setTodoListFunc: (title: string) => void
}

const Nav: React.FC<Props> = ({ todoList, updateTodoFunc, setTodoListFunc }) => {
  const history = useHistory();
  const handleLink = (path: string) => history.push(path);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Home" onClick={() => handleLink('/')} />
          <Tab label="Create" onClick={() => handleLink('/create')} />
          <Tab label="Hello" onClick={() => handleLink('/hello')} />
        </Tabs>
      </AppBar>

      <Switch>
        <Route exact path='/create' render={() => <InputArea setTodoListFunc={setTodoListFunc} />} />
        <Route exact path='/hello' render={() => <Hello />} />
        <Route path='/' render={() => <TodoList todoList={todoList} updateTodoFunc={updateTodoFunc} />} />
      </Switch>
    </div>
  );
}

export default Nav;
