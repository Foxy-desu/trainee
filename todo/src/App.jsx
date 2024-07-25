import TaskFormModel from "./features/task_create_form/model/taskCreateFormModel";
import TasksModel from "./widgets/tasks/model/tasksModel";
import "./App.css";

function App() {
  return (
    <div className="app-wrap">
      <header>
        <h1 className="appTitle">Мои задачи</h1>
        <TaskFormModel />
      </header>
      <main>
        <div>
          <TasksModel />
        </div>
      </main>
    </div>
  );
}

export default App;
