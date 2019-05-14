import React, { Component } from 'react'
import classes from './Header.css';
import { MdMenu, MdAccountCircle } from 'react-icons/md';

class Header extends Component {
    render() {
        return (
            <div className={classes.Header}>
                <div className={classes.Menu}  >
                    <MdMenu size={30} />
                </div>
                <div className={classes.AppName}>
                    <h3>NewsApp</h3>
                </div>
                <div className={classes.User} >
                    <MdAccountCircle size={30} />
                </div>
            </div>
        )
    }
};

export default Header;