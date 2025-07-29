import NewTask from "./NewTask.jsx";

export const Tasks = ({tasks, onAddTask, onDelete}) => {
    return <section>
        <h2 className="text-xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAdd={onAddTask} />
        {tasks.length === 0 && (<p className="text-stone-800 mt-4">This project does not have any tasks yet!</p>)}
        {tasks.length > 0 && (<ul className="mt-4 px-4 py-2 rounded-md bg-stone-100">
            {tasks.map((task) => {
                return <li className="flex justify-between my-4" key={task.id}> <span>{task.title}</span> <button className="text-stone-700 hover:text-red-900" onClick={() => {
                    onDelete(task.id)
                }}>Delete</button> </li>
                }
            )}
        </ul>)}
    </section>
}