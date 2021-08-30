import React from 'react';
import './ToDo.css';
import deleteIcon from '../../../img/delete.png';

const ToDo = ({ todo, toggleTask, removeSeries }) => {
    return (
        <div key={todo.id} className='toDo'>
            <div className={todo.complete ? 'item-text strike' : 'item-text'} onClick={() => toggleTask(todo.id)}>{todo.task}</div>
            <div onClick={() => removeSeries(todo.id)}><img src={deleteIcon} alt='delete' /></div>
        </div>
    )
}

export default ToDo;