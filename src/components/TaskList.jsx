
import TaskListItems from './TaskListItems'

function TaskList({tasks,deleteTask}) {


  return (
   <div className="list">
        <ul className='task'>
            {
                tasks.length > 0 && tasks.map(task => (
                    <TaskListItems key={task.id} task={task} deleteTask={deleteTask}/>
                ))
            }
    {
        tasks.length <= 0 && <p className='empty'>You don't have any tasks on your list</p>
    }
         
        </ul>
  </div>
  )
}

export default TaskList