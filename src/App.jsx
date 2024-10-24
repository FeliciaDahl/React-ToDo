import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'


function App() {

  const [tasks, setTasks] = useState([

])
const addTask = (taskInput) => {
setTasks(state => {
  return [...state, {id:uuidv4(), task: taskInput} ]
})

}

const deleteTask = (id) => {
setTasks(state => {
  return state.filter(task => task.id !== id)
})

}
  return (
    <>
    <AddTaskForm addTask={addTask}/>
    <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>

  )
}

export default App
