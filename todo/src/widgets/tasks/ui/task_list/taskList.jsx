import TaskCardModel from '../../../../entities/task_card/model/taskCardModel';
import cl from './taskList.module.scss';

const TaskList =({tasks})=> {
  
  const renderTasks = (tasks) => {
    return tasks.map(task=>{
      return (
        <li key={task.id} className={cl.taskListItem}>
          <TaskCardModel cardData={task}/>
        </li>
      )
    })
  };
  return (
    <>
    {tasks.length > 0
        ? (
            <ul className={cl.taskList}>
              {renderTasks(tasks)}
            </ul>
          )
        : <p style={{textAlign: 'center'}}>Список задач пуст</p>
    }
    </>
  )
};

export default TaskList;