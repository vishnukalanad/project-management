export default function Input({label, isTextArea, ...props}) {
    const styles = "w-full p-1 border-b-1 rounded-sm border-stone-300 bg-stone-200 text-stone-700 focus:outline-none"
    return <p>
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        { isTextArea ? <textarea className={styles} {...props}></textarea> : <input className={styles} {...props} />}
    </p>
}