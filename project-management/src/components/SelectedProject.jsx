import {Button} from "./Button.jsx";
import {Tasks} from "./Tasks.jsx";

export default function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}) {
    const formattedDate = new Date(project.eDueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl mb-2 text-stone-700">{project.title}</h1>
                    <Button onClick={onDelete}>Delete</Button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks onDelete={onDeleteTask} onAddTask={onAddTask} tasks={tasks} />
        </div>
    )
}