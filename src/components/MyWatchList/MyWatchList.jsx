import React from 'react';
import { useState } from 'react';
import ToDoForm from './ToDoForm/ToDoForm';
import ToDo from './Todo/Todo';

const MyWatchList = () => {
    const [todos, setTodos] = useState([]);
    const addSeries = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }
    const removeSeries = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }
    const handleToggle = (id) => {
        setTodos([...todos.map((todo) => todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo })])
    }

    return (
        <div>
            <div>
                <h1>List of Series: {todos.length}</h1>
            </div>
            <ToDoForm addSeries={addSeries} />
            {todos.map((todo) => {
                return (
                    <ToDo key={todo.id}
                        todo={todo}
                        toggleTask={handleToggle}
                        removeSeries={removeSeries} />
                )
            })}
        </div>
    )
}

export default MyWatchList;