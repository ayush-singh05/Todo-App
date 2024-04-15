import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TaskList from './TaskList';

function Task() {
    const todos = useSelector(state => state.todo.todos);
    
    
  return (
    <div>
    {
        todos.map((item) => (
            <TaskList todo={item}/>
            
        ))
    }
    </div>
  )
}

export default Task