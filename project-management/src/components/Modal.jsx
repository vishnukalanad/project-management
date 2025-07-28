import {createPortal} from "react-dom";
import {forwardRef, useImperativeHandle, useRef} from "react";
import {Button} from "./Button.jsx";

const Modal = forwardRef(function Modal({children, buttonCaption}, ref) {
    const dialog = useRef()
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    return createPortal(<dialog ref={dialog} className="m-auto rounded-md backdrop:bg-stone-900/90 w-[30rem] z-50">
        <div className="p-4 bg-stone-100 rounded-md">
            {children}
            <form method="dialog" className="text-right">
                <Button> {buttonCaption} </Button>
            </form>
        </div>
    </dialog>, document.getElementById('modal-root'))
})

export default Modal