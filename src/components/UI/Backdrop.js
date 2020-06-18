import React from 'react'
import './backdrop.scss';
export default function Backdrop(props) {
    return (
        <div onClick={props.click}
            style={{ display: props.show ? 'block' : 'none' }}
            className="Backdrop">
            Backdrop
        </div>
    )
}
