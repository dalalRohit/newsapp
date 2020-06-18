import React from 'react'
// import './sidenav.scss';
import Sections from './Sections';
import Backdrop from './UI/Backdrop';

function Sidenav(props) {
    let attachedClasses = ["Sidenav", "Close"];
    if (props.show) {
        attachedClasses = ["Sidenav", "Open"];
    }
    return (
        <>
            <Backdrop show={props.show} click={props.backdropClick} />
            <div className={attachedClasses.join(' ')}>

                <h3>NewsApp</h3>

                <Sections click={props.backdropClick} />

            </div>
        </>

    )
}

export default Sidenav;

