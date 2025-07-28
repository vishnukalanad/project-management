import Input from "./Input.jsx";
import {useRef} from "react";

export default function NewProject({onAddProject}) {
    const projectName = useRef();
    const projectDesc = useRef();
    const dueDate = useRef();

    function handleSave() {
        const title = projectName.current.value;
        const description = projectDesc.current.value;
        const eDueDate = dueDate.current.value;

        // Validation;
        onAddProject({title, description, eDueDate})
    }

    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="bg-stone-300 text-stone-800 px-4 py-2 rounded-lg hover:bg-stone-400 hover:text-stone-800 cursor-pointer active:bg-stone-500 active:text-stone-900">Cancel</button></li>
            <li><button className="bg-stone-800 text-stone-100 px-4 py-2 rounded-lg hover:bg-stone-700 cursor-pointer active:bg-stone-900" onClick={handleSave}>Save</button></li>
        </menu>

        <div>
            <Input type="text" ref={projectName} label="Project Name" />
            <Input type="text" ref={projectDesc} label="Project Description" isTextArea />
            <Input type="date" ref={dueDate} label="Due Date" />
        </div>
    </div>
}