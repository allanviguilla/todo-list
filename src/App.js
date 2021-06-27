import React from 'react';
import './App.css';
//Import Components
import Form from './components/form';
import ToDoList from './components/todolist';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Allan's To-Do List</h1>
      </header>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
