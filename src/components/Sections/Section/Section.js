import React from 'react';
import classes from './Section.css';
const section = (props) => {
    return (
        <div className={classes.Section} onClick={props.click}>
            {props.name}
        </div>
    )
};

export default section;