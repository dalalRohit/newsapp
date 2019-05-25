import React from 'react'
import classes from './Sidenav.css';
import Sections from './../Sections/Sections';
import Auxi from './../../hoc/Auxi/Auxi';
import Backdrop from './../UI/Backdrop/Backdrop';

function Sidenav(props) {
    let attachedClasses = [classes.Sidenav, classes.Close];
    if (props.show) {
        attachedClasses = [classes.Sidenav, classes.Open];
    }
    return (
        <Auxi>
            <Backdrop show={props.show} click={props.backdropClick} />
            <div
                className={attachedClasses.join(' ')}
                style={{ display: props.show ? 'block' : 'none' }}>

                <h3>NewsApp</h3>

                <Sections click={props.sectionClick} />

            </div>
        </Auxi>

    )
}

export default Sidenav;

