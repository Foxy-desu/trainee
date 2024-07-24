import TaskFormModel from './features/task_create_form/model/taskCreateFormModel';
import './App.css'
import TaskListModel from './widgets/task_list/model/taskListModel';

function App() {

  return (
    <>
      <header>
        <h1 className='appTitle'>Мои задачи</h1>
        <TaskFormModel/>
      </header>
      <main>
        <div>
          <TaskListModel/>
        </div>
      </main>
    </>
  )
}

export default App
