import React, { Component } from 'react'
import Header from './../Header/Header';
import Footer from './../../components/Footer/Footer';
import Auxi from './../../hoc/Auxi/Auxi'
class Layout extends Component {
    render() {
        return (
            <Auxi>
                <Header />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </Auxi>
        )
    }
};

export default Layout;
