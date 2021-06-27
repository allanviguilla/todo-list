import React from 'react';
//Import Components
import Todo from './todo';

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    //Add component logic
    //console.log(todos);

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo key={todo.id} text={todo.text} todo={todo} todos={todos} setTodos={setTodos} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;