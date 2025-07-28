export const Button = ({children, ...props}) => {
    const styles = "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-100 hover:bg-stone-600 hover:cursor-pointer active:bg-stone-800"
    return <button className={styles} {...props}>{children}</button>
}