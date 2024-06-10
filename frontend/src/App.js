import "./App.css";
import axios from "axios";
import TaskManager from "./components/TaskManager";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("http://localhost:5000/api/v1/tasks");
      console.log(response.data.tasks);
      console.log();
      setTasks(response.data.tasks);
    };
    fetchTasks();
  }, []);
  return <TaskManager />;
}

export default App;
