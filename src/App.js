import React, { useState } from 'react';
import TodoInsert from './todos/components/TodoInsert';
import TodoList from './todos/components/TodoList';
import TodoTemplate from './todos/components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: `리액트의 기초 알아보기`,
      checked: true,
    },
  ])

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
