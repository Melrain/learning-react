export const Task = (props) => {
  return (
    <div>
      <h1 style={""}>{props.taskName}</h1>
      <button onClick={()=>props.complete(props.completeTask)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};
