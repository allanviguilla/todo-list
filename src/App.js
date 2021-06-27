import React, { useState } from 'react';
import './App.css';
//Import Components
import Form from './components/form';
import ToDoList from './components/todolist';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Allan's To-Do List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <ToDoList />
    </div>
  );
}

export default App;
