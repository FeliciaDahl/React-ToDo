import React from 'react'

function TaskListItems({task, deleteTask}) {
  return (
    <div>  
<li>
    <p className='id'>{task.id.slice(0,8)}</p>
    <div className='divide'>
    <p className='task-text'>{task.task}</p>
    <button onClick={() => deleteTask(task.id)} className='btn btn-remove'>Remove</button>
   </div>
</li>
</div>
  )
}

export default TaskListItems