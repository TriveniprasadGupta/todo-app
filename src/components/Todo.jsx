import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import axios from 'axios';
import { TodoItem } from './TodoItem';

const Todo = () => {

    const [list, setList] = useState([]);
    const [data, setData] = useState({ task: '', complete: false });


    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = () => {
        axios.get('http://localhost:4101/todos')
            .then(({ data }) => {
                setList(data);
            }).catch((err) => {
                console.log(err);
            });
    }

    const handleSubmit = () => {
        if (!data.task) return alert('Please enter task.');

        axios.post('http://localhost:4101/todos', data)
            .then(({ data }) => {
                getTodos();
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <h2>Todo App</h2>

            <div>
                <input type="text" onChange={(e) => setData({ ...data, task: e.target.value })} />
                <button onClick={handleSubmit}>Save</button>
            </div>

            <div className='todo'>
                {list.map((item)=>{
                    return <TodoItem key={item.id} item={item} getTodos={getTodos}/>
                })}
            </div>
        </div>
    )
}

export default Todo;