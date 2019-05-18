import React, { Component } from 'react'
import classes from './Header.css';
import { MdMenu, MdAccountCircle } from 'react-icons/md';
import Auxi from './../../hoc/Auxi/Auxi';
import Sidenav from './../../components/Sidenav/Sidenav';

class Header extends Component {
    state = {
        sidenav: false
    }
    toggleSidenav = () => {
        this.setState({ sidenav: !this.state.sidenav });

    }
    handleBackdrop = () => {
        this.setState({ sidenav: !this.state.sidenav });
    }
    handleSection = (props) => {
        alert('');
    }
    render() {
        return (
            <Auxi>
                <Sidenav
                    backdropClick={this.toggleSidenav}
                    show={this.state.sidenav}
                    clicked={this.handleSection} />

                <div className={classes.Header}>
                    <div className={classes.Menu} onClick={this.toggleSidenav} >
                        <MdMenu size={30} />
                    </div>
                    <div className={classes.AppName}>
                        <h3>NewsApp</h3>
                    </div>
                    <div className={classes.User} >
                        <MdAccountCircle size={30} />
                    </div>
                </div>
            </Auxi>

        )
    }
};

export default Header;