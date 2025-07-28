import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./components/sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
    const [projectState, setProjectState] = useState({
        selectedProject: undefined,
        projects: []
    })

    function handleNewProject() {
        setProjectState(prevState =>{
            return {
                ...prevState,
                selectedProject: null,
                showNewProject: true
            }
        })
    }
    let content = null;

    if(projectState.selectedProject === null) {
        content = <NewProject onAddProject={handleAddProject} />
    } else if(projectState.selectedProject === undefined) {
        content = <NoProjectSelected onStartAddProject={handleNewProject} />
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

  return (
    <div className="h-screen flex gap-8 bg-stone-50">
      <Sidebar onStartAddProject={handleNewProject} projects={projectState.projects} />
        {content}
    </div>
  )
}

export default App
