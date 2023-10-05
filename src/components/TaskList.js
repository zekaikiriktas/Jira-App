import React from 'react'
import TaskShow from './TaskShow'

const TaskList = ({tasks,onDelete,id,onUpdate}) => {
  return (
    <div className='task-list'>
      {tasks.map((task,index)=>{
        return <TaskShow key={index} task={task} onDelete={onDelete} onUpdate={onUpdate}/>
      })}
    </div>
  )
}

export default TaskList
