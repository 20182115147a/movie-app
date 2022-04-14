import React,{useState,useEffect,useRef} from 'react';
import './modal.scss'
const Modal = props => {
    const modal = useRef(null)
    const closeModal = () => {
        modal.current.classList.remove('active')
       if (props.onClose )props.onClose()
    }
    return (
    <div id={props.id} className = {`modal `} ref ={modal}>
            {props.children}
            <div className="modal__close" onClick={closeModal}>
                <i className="bx bx-x" ></i>
            </div>
    </div>
    )
}
export default Modal