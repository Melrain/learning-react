
import './App.css';

function App() {
  return (
    <div className="App">
      <User salary={100} position="ceo" company="google"/>
    </div>
  );
}

//组件component

const User = (job)=>{
  return(
    <div>
      <h1>{job.salary}</h1>
      <h1>{job.position}</h1>
      <h1>{job.company}</h1>
    </div>
  );
}

export default App;
