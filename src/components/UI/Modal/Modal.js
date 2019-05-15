import React from 'react'
import classes from './Modal.css';
import Backdrop from './../Backdrop/Backdrop';

function Modal(props) {
    return (
        <div>
            <Backdrop />
            <div className={classes.Modal}>
                MODAL
                {props.children}
            </div>
        </div>

    )
}
export default Modal;
