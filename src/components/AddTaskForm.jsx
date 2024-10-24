import React, { useState } from 'react'

function AddTaskForm({addTask}) {

const [taskInput, setTaskInput] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()

  if(taskInput.trim() === '') return

  addTask(taskInput)
  setTaskInput('')
}
  return (
   <div className="container">
    <div className="card">
    <h3>Add your task:</h3>
    <form id="todo-form" onSubmit={handleSubmit}>
        <input value={taskInput} onChange={(e) => setTaskInput(e.target.value)} type="text" className="form-input" id="form-input"/>
        <button className="btn">Add to list</button>
    </form> 
    </div>
    </div>
  )
}

export default AddTaskForm