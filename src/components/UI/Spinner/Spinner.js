import React from 'react';
import classes from './Spinner.css';

const spinner = (props) => {
    return (
        <div className={classes.loader}
            style={{ display: props.show ? 'block' : 'none' }}>
            Loading...
        </div>
    )
};

export default spinner;