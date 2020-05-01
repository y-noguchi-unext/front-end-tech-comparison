import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

type Props = {
  setTodoListFunc: (title: string) => void
}

const InputArea: React.FC<Props> = ({ setTodoListFunc }) => {
  const [input, setInput] = useState('');
  return (
    <div>
      <TextField
        id="standard-basic"
        label="記入してください"
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setTodoListFunc(input);
          };
        }}
      />
      <Button variant="contained" color="primary" onClick={() => { setTodoListFunc(input) }}>
        保存
      </Button>
    </div>
  );
}

export default InputArea;
