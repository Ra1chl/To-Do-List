import React, {useState} from "react";
import "./listInput.css"

function List(){

    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState("");
    const [finishDate, setFinishDate] = useState("");
    const [type, setType] = useState("Job");

    function handleTasks(){
        const newTask = {taskName: name,
                        taskFinishDate: finishDate,
                        taskType: type
                        };
        setTasks(t => [...t,newTask]);

        //vymaže inputy
        setName("");
        setFinishDate("");
    
    }

    function handleNameTask(event){
        setName(event.target.value);
    }

    function handleFinishDateTask(event){
        setFinishDate(event.target.value);
    }

    function handleTypeTask(event){
        setType(event.target.value);
    }

    function handleRemoveOne(index){
        setTasks(tasks.filter((_, i) => i !== index))
    }
    
    function handleClearAll() {
        const confirmClear = window.confirm("This will delete all tasks. Are you sure?");
        
        if (!confirmClear) return;
        setTasks([]);
    }

    return (<div className="tasks-container">

                <h2 className="title">TO DO LIST</h2>
                <ul className="tasks-list">
                    {tasks.map((tasks, index)=> 
                        <li key={index} className={`task-item ${tasks.taskType.toLowerCase()}`}>
                          <span> {tasks.taskName} | {tasks.taskFinishDate} </span>
                          <button className="delete-one-button" onClick={() => handleRemoveOne(index)}>x</button>
                        </li>
                    )}
                </ul>

                
                <input className="input-field" type="text" value={name} onChange={handleNameTask} placeholder="Enter name of task"/><br/>
                <input className="input-field" type="date" value={finishDate} onChange={handleFinishDateTask}/><br/>
                <select className="input-field" value={type} onChange={handleTypeTask}>
                    <option value="Job">Job</option>
                    <option value="School">School</option>
                    <option value="personal">Personal</option>
                </select>
                    <button className ="button" onClick={handleTasks}>Add task</button>
                    <button className ="delete-button" onClick={handleClearAll}>Delete all</button>
            </div>);
}

export default List