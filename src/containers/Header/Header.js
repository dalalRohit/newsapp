import React, { Component } from 'react'
import classes from './Header.css';
import { MdMenu, MdAccountCircle } from 'react-icons/md';
import Auxi from './../../hoc/Auxi/Auxi';
import Sidenav from './../../components/Sidenav/Sidenav';
import Modal from './../../components/UI/Modal/Modal';
// import axios from './../../axios-news';
// import Form from './../Form/Form';

class Header extends Component {
    state = {
        sidenav: false,
        modal: false,
    }
    toggleSidenav = () => {
        this.setState({ sidenav: !this.state.sidenav });
    }
    toggleModal = () => {
        this.setState({ modal: false })
    }
    handleSection = (section) => {
        //change news for mobile layout

    }
    toggleUserClick = () => {
        this.setState({ modal: true })
    }
    render() {
        return (
            <Auxi>
                {/* {this.state.modal ?
                    <Modal click={this.toggleModal}>
                        <Form />
                    </Modal> :
                    null
                } */}
                <Sidenav
                    backdropClick={this.toggleSidenav}
                    show={this.state.sidenav} />

                <div className={classes.Header}>
                    <div className={classes.Menu} onClick={this.toggleSidenav} >
                        <MdMenu size={30} />
                    </div>
                    <div className={classes.AppName}>
                        <h3>NewsApp</h3>
                    </div>

                    {/* <div className={classes.User} onClick={this.toggleUserClick} >
                        <MdAccountCircle size={30} />
                    </div> */}

                </div>
            </Auxi>

        )
    }
};

export default Header;