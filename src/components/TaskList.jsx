import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo,toggleCompleted } from '../store/todoSlice';

function TaskList({ todo  }) {

     // Initialize dispatch to dispatch actions to the Redux store
   const dispatch = useDispatch()
   
    // Function to toggle the completion status of the todo
    const toggle = () => {

          // Dispatch the toggleCompleted action with the todo id
        dispatch(toggleCompleted(todo.id))
    }

    return (
        <div >
            
            <div className={`flex justify-between rounded-md shadow-md items-center max-w-screen-md mx-auto py-2 px-4 border my-2  ${todo.isComplete ? "bg-[#bcd8a2]" : "bg-[#e5a2a2]"}`}>
                <div className='w-10'>
                    <input type="checkbox"
                        className='cursor-pointer'
                        checked={!todo.isComplete}
                        onChange={toggle }
                    />
                </div>
                <div className='w-3/4 text-left'>
                    <span>{todo.text}</span>
                </div>
                <div className='w-10'>
                    <button disabled={!todo.isComplete} onClick={() => dispatch(removeTodo(todo.id))}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg></button>
                </div>
            </div>
        </div>
    )
}

export default TaskList