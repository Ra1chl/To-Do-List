import React, {useState} from "react";


function List(){

    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState("");
    const [finishDate, setFinishDate] = useState("");

    function handleTasks(){
        const newTask = {taskName: name,
                        taskFinishDate: finishDate
                        };
        setTasks(t => [...t,newTask]);
    }

    function handleNameTask(event){
        setName(event.target.value);
    }

    function handleFinishDateTask(event){
        setFinishDate(event.target.value);
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
                        <li key={index} className="task-item">
                            {tasks.taskName} | {tasks.taskFinishDate}
                        </li>
                    )}
                </ul>

                
                <input className="input-field" type="text" value={name} onChange={handleNameTask} placeholder="Enter name of task"/><br/>
                <input className="input-field" type="date" value={finishDate} onChange={handleFinishDateTask} placeholder="Enter date"/><br/>
                <button className ="button" onClick={handleTasks}>Add task</button>
                <button className ="delete-button" onClick={handleClearAll}>Delete all</button>
            </div>);
}

export default List