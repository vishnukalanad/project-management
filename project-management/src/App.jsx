import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./components/sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
    const [showNewProject, setShowNewProject] = useState({
        selectedProject: undefined,
        projects: []
    })

    function handleNewProject() {
        setShowNewProject(prevState =>{
            return {
                ...prevState,
                selectedProject: null,
                showNewProject: true
            }
        })
    }
    let content = null;

    if(showNewProject.selectedProject === null) {
        content = <NewProject />
    } else if(showNewProject.selectedProject === undefined) {
        content = <NoProjectSelected onStartAddProject={handleNewProject} />
    }
  return (
    <div className="h-screen flex gap-8 bg-stone-50">
      <Sidebar onStartAddProject={handleNewProject} />
        {content}
    </div>
  )
}

export default App
