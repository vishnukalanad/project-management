import {useState} from "react";

export default function NewTask({onAdd}) {
    // Passing empty string to the useState to fix the error saying uncontrolled component update by React;
    const [enteredTask, setEnteredTask] = useState('')

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }

    function handleClick() {
        if(enteredTask.trim() === "") {
            return
        }
        onAdd(enteredTask)
        setEnteredTask("")
    }


    return <div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 py-1 rounded-md bg-stone-200" value={enteredTask} placeholder="Task title" onChange={handleChange} />
        <button className="bg-stone-700 text-stone-50 py-1 px-2 rounded-md" onClick={handleClick}>Add Task</button>
    </div>
}