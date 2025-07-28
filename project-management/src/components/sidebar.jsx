import {Button} from "./Button.jsx";

export default function Sidebar({onStartAddProject, projects, onSelectProject, selectedProjectId}) {
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Projects</h2>
        <div>
            <Button onClick={onStartAddProject}>+ New Project</Button>
        </div>
        <ul className="mt-8">
            {projects.map((project) => {
                let style = "w-full text-left text-stone-100 rounded-md bg-stone-900 py-2 px-2 mt-2 cursor-pointer hover:bg-stone-800"

                if (project.id === selectedProjectId) {
                   style +=" bg-stone-800"
                }
                return(<li key={project.id}>
                    <button onClick={() => onSelectProject(project.id)} className={style}>{project.title}</button>
                </li>)
            })}
        </ul>
    </aside>
}