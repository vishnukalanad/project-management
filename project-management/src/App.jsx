import { useState } from 'react'
import './App.css'
import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
    const [projectState, setProjectState] = useState({
        selectedProject: undefined,
        projects: [],
        tasks: []
    })

    function handleSelectProject(projectId) {
        setProjectState(prevState =>{
            return {
                ...prevState,
                selectedProject: projectId,
                showNewProject: true
            }
        })
    }

    function handleNewProject() {
        setProjectState(prevState =>{
            return {
                ...prevState,
                selectedProject: null,
                showNewProject: true
            }
        })
    }

    const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProject);

    let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectState.tasks} />;

    if(projectState.selectedProject === null) {
        content = <NewProject onAddProject={handleAddProject} onCancel={handleCancel} />
    } else if(projectState.selectedProject === undefined) {
        content = <NoProjectSelected onStartAddProject={handleNewProject} />
    }

    function handleDeleteTask(id) {
        setProjectState(prevState => {
                return {
                    ...prevState,
                    tasks: prevState.tasks.filter((task) => task.id !== id)
                }
            }
        )
    }

    function handleAddTask(task) {
        setProjectState(prevState => {
            const taskId = Math.random()
            const newTask = {
                id: taskId,
                title: task,
                projectId: prevState.selectedProject,
            }
            return({
                ...prevState,
                tasks: [...prevState.tasks, newTask]
            })
        })
    }

    function handleAddProject(project) {
        const newProject = {...project, id : Math.random()}
        setProjectState(prevState => {
            return {
                ...prevState,
                projects: [...prevState.projects, newProject]
            }
        })
    }

    function handleCancel() {
        setProjectState((prevState) => {
            return (
                {
                    ...prevState,
                    selectedProject: undefined,
                }
            );
        })
    }

    function handleDeleteProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProject: undefined,
                projects: prevState.projects.filter((project) => project.id !== projectState.selectedProject)
            }
            }
        )
    }

  return (
    <div className="h-screen flex gap-8 bg-stone-50">
      <Sidebar onStartAddProject={handleNewProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProject} />
        {content}
    </div>
  )
}

export default App
