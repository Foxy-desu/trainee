import TaskFormModel from "./features/task_create_form/model/taskCreateFormModel";
import "./App.css";
import TasksModel from "./widgets/tasks/model/tasksModel";

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
