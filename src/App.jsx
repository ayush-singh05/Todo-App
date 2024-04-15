import { useState } from 'react'
import './App.css'
import TaskInput from './components/TaskInput'

import { Provider } from 'react-redux'
import store from './store/store'
import Task from './components/Task'

function App() {

  return (
    <>
    // Wrapping your components with the Provider component from react-redux  
     <Provider store={store}>
     <div className=' '>
     <TaskInput/>
     <h3 className='text-2xl font-semibold my-7'>My Todos</h3>
     <Task/>
     </div>
     </Provider>
    </>
  )
}

export default App
