import React from 'react';
import  './spinner.scss';

const spinner = (props) => {
    return (
        <div className="loader"
            style={{ display: props.show ? 'block' : 'none' }}>
            Loading...
        </div>
    )
};

export default spinner;