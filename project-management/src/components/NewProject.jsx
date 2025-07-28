import Input from "./Input.jsx";

export default function NewProject() {
    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="bg-stone-300 text-stone-800 px-4 py-2 rounded-lg hover:bg-stone-400 hover:text-stone-800 cursor-pointer active:bg-stone-500 active:text-stone-900">Cancel</button></li>
            <li><button className="bg-stone-800 text-stone-100 px-4 py-2 rounded-lg hover:bg-stone-700 cursor-pointer active:bg-stone-900">Save</button></li>
        </menu>

        <div>
            <Input label="Project Name" />
            <Input label="Project Description" isTextArea />
            <Input label="Due Date" />
        </div>
    </div>
}