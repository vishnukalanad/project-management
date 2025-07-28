import noProjectImage from '../assets/no-project.png'
import {Button} from "./Button.jsx";

export default function NoProjectSelected({onStartAddProject}) {
    return <div className="mt-24 text-center w-2/3">
        <img src={noProjectImage} className="w-16 h-16 object-contain mx-auto" alt="No project selected" />
        <h2 className="text-xl font-bold text-stone-700 my-4">No project selected!</h2>
        <p className="text-stone-500 mb-4">Please select a project or get started with a new one!</p>
        <p>
           <Button onClick={onStartAddProject}>Create New Project</Button>
        </p>
    </div>
}