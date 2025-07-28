import {forwardRef} from "react";

const Input = forwardRef(function Input({label, isTextArea, ...props}, ref) {
    const styles = "w-full p-1 border-b-1 rounded-sm border-stone-300 bg-stone-200 text-stone-700 focus:outline-none"
    return <p>
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        { isTextArea ? <textarea ref={ref} className={styles} {...props}></textarea> : <input ref={ref} className={styles} {...props} />}
    </p>
})

export default Input