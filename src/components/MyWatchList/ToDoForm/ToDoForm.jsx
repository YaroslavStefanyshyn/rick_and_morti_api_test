import React, { useState } from 'react';
import s from './ToDoForm.module.css'

const ToDoForm = ({ addSeries }) => {
    const [userInput, setUserInput] = useState('')
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addSeries(userInput)
        setUserInput('')
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={userInput}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='Enter the episode' />
            <button>Save</button>
        </form>
    )
}

export default ToDoForm;