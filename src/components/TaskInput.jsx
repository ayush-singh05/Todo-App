import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todoSlice'

function TaskInput() {
    const [text, setText] = useState('');
    const dispach = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispach(addTodo(text));
        setText(() => setText(""));
        
    }
    
  return (
    <div >
        <h2 className='text-5xl font-semibold mb-16'>Todo App</h2>
        <div className='flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='max-w-screen-sm flex'>
               <input onChange={(e) => setText(e.target.value)} 
               value={text}
               type="text" 
               className='border border-slate-300 w-96 max-sm:w-52  px-2 py-2 rounded-md focus:border-slate-400 outline-none'  />

               <button className='mx-5 bg-green-700 hover:bg-green-600 text-white p-2 rounded-lg font-semibold text-nowrap'>Add Todo</button>
            </form>
        </div>
    </div>
  )
}

export default TaskInput