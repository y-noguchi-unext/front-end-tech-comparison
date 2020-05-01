import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

interface Props { }

const URL = 'https://aqueous-chamber-18072.herokuapp.com/hello';


const Hello: React.FC<Props> = () => {
  const [message, setMessage] = useState('メッセージ');
  const [input, setInput] = useState('');

  const handleClickHello = (name: string) => {
    axios.post(URL, {
      "name": name
    }).then((results) => {
      setMessage(results.data.message);
    }).catch(error => {
      setMessage('APIだめでした');
    });
  }

  return (
    <div>
      <TextField
        id="standard-basic"
        label="名前"
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleClickHello(input);
          };
        }}
      />

      <Button variant="contained" color="primary" onClick={() => handleClickHello(input)}>ポチ</Button>
      <p>{message}</p>
    </div>
  );
}

export default Hello;
