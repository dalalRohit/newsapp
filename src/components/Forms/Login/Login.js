import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Auxi from './../../../hoc/Auxi/Auxi';

import classes from './Login.css';
export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }
    handleLogin = () => {
        let data = { email: this.state.email, password: this.state.password };
        
    }
    render() {
        return (
            <Auxi >
                <h3>Login Form</h3>
                <form >
                    <div className={classes.Login}>
                        <TextField
                            id="outlined-name"
                            label="Email"
                            margin="normal"
                            variant="outlined"
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleLogin}>Log-in</Button>
                    </div>
                </form>
            </Auxi >
        )
    }

}

