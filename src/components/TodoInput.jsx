import React, { useState } from 'react';
import { useActions } from "react-redux";
import { addTodoAction } from "../redux";
import uuid from 'uuid/v4'

export default () => {
    const [todo, setTodo] = useState('');
    const addTodo = useActions((todo) => addTodoAction(todo));

    const onChange = event => {
        setTodo(event.target.value);
    }
    const onSubmit = event => {
        event.preventDefault();
        if(todo.trim() === '')return;
        
        addTodo({
            id: uuid(),
            name: todo,
            complete: false
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="form-div"> 
                <input type="text"
                name="todo"
                placeholder="Add a todo"
                value={todo}
                onChange={onChange}
                >
                <button type="submit">Add Todo</button>
            </div>
        </form>
    )
}

