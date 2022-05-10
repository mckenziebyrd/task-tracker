import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: 'test',
        day: 'December 2'
    },
    {
        id: 2, 
        text: 'test',
        day: 'June 12'
    },
    {
        id: 3, 
        text: 'test',
        day: 'May 23'
    }
])

  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks} />
    </div>
  );
}
Header.defaultProps = {
  title: 'Task Tracker'
}

export default App;
