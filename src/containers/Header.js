import React, { Component } from 'react'
// import './header.scss';
import { MdMenu } from 'react-icons/md';
// import Sidenav from './../components/Sidenav';

class Header extends Component {
    state = {
        sidenav: false,
    }
    toggleSidenav = () => {
        this.setState({ sidenav: !this.state.sidenav });
    }
    handleSection = (section) => {
        //change news for mobile layout

    }
    // toggleUserClick = () => {
    //     this.setState({ modal: true })
    // }
    render() {
        return (
            <>
                {/* <Sidenav
                    backdropClick={this.toggleSidenav}
                    show={this.state.sidenav} /> */}

                <div className="Header">
                    <div className="Menu" onClick={this.toggleSidenav} >
                        <MdMenu size={30} />
                    </div>
                    <div className="AppName">
                        <h3>NewsApp</h3>
                    </div>
                </div>
            </>

        )
    }
};

export default Header;