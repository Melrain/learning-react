import "./App.css";
import { Task } from "./Task";
import { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState("");

  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    const task = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      taskName: newTask,
      complete:false
    };

    setTaskList([...taskList, task]);
  };

  const inputHandler = (event) => {
    setNewTask(event.target.value);
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const completeTask = (task)=>{
    task.complete = true;
  }

  return (
    <div class="App">
      <div class="addTask">
        <input onChange={inputHandler}></input>

        <button onClick={addTask}>Add Task</button>
        
      </div>

      <div class="list">
        {taskList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} completeTask = {task.complete} deleteTask={deleteTask} complete = {completeTask}  />;
        })}
      </div>
    </div>
  );
}

export default App;
