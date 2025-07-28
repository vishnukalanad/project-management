import { useState } from 'react'
import './App.css'
import Sidebar from "./components/sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
    const [projectState, setProjectState] = useState({
        selectedProject: undefined,
        projects: []
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

    let content = <SelectedProject project={selectedProject} />;

    if(projectState.selectedProject === null) {
        content = <NewProject onAddProject={handleAddProject} onCancel={handleCancel} />
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

  return (
    <div className="h-screen flex gap-8 bg-stone-50">
      <Sidebar onStartAddProject={handleNewProject} projects={projectState.projects} onSelectProject={handleSelectProject} />
        {content}
    </div>
  )
}

export default App
