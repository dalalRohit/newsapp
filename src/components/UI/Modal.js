import React, { Component } from 'react'
import './modal.scss';
import Backdrop from './Backdrop';
import { IoIosClose } from 'react-icons/io';

export default class Modal extends Component {

    render() {
        let modalClasses = ["Modal", this.props.show ? "ModalOpen" : "ModalClosed"];
        return (
            <>
                <Backdrop show click={this.props.click} />
                <div className={modalClasses.join(' ')}>
                    {/* <div className={classes.Close} onClick={this.props.click} >
                        <IoIosClose size={30} />
                    </div> */}
                    {this.props.children}
                </div>
            </>

        )
    }
}
