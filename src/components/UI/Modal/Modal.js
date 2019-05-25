import React, { Component } from 'react'
import classes from './Modal.css';
import Backdrop from './../Backdrop/Backdrop';
import Auxi from './../../../hoc/Auxi/Auxi';
import { IoIosClose } from 'react-icons/io';

export default class Modal extends Component {
    render() {
        return (
            <Auxi>
                <Backdrop show click={this.props.click} />
                <div className={classes.Modal}>
                    <div className={classes.Close} onClick={this.props.click} >
                        <IoIosClose size={30} />
                    </div>
                    {this.props.children}
                </div>
            </Auxi>

        )
    }
}
