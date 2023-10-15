import { useState } from "react";
// import "./styles.css";
import "./index.css";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        //splice, looks for index, then the delete count
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div className="App">
            <div className="description">
                <h3>To Do List</h3>
                <h4>Instructions</h4>
                <p>
                    To add a new task: You can either click the button or click
                    enter on your keyboard
                </p>
                <p>
                    To delete a task: double click on any task you would like to
                    delete
                </p>
            </div>
            <div className="container">
                <div className="input-wrap">
                    <input
                        placeholder="add a task"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    ></input>
                    <button onClick={addTask}>Add task</button>
                </div>
                <div className="tasks-wrap">
                    <ul>
                        {tasks.map((task, index) => (
                            <li
                                key={index}
                                onDoubleClick={() => removeTask(index)}
                            >
                                {task}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;
