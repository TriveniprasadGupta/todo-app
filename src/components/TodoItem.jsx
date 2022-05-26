import axios from 'axios';
import React from 'react'
import styled from 'styled-components'

const Task = styled.h4`
    flex: 1;
    text-align: left;
    margin: 4% 2%;
    text-decoration: ${({ checked }) => checked ? 'line-through' : 'none'};
`;
const Check = styled.input`
`;

export const TodoItem = ({ item, getTodos }) => {
    const { id, task, complete } = item;

    const handleChange = () => {
        axios.patch(`http://localhost:4101/todos/${id}`, { complete: !complete })
            .then((result) => {
                getTodos();
            }).catch((err) => {
                console.log(err);
            });
    }

    const deleteTask = ()=>{
        axios.delete(`http://localhost:4101/todos/${id}`)
        .then((result) => {
            getTodos();
        }).catch((err) => {
            console.log(err);
        });
    }

    return <div className='todo__item'>
        <Check type='checkbox' onChange={handleChange} checked={complete} />
        <Task checked={complete}>{task}</Task>
        <button onClick={deleteTask}>Delete</button>
    </div>
}