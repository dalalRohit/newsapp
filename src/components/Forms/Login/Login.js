import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Auxi from './../../../hoc/Auxi/Auxi';

import classes from './Login.css';
function Login(props) {
    return (
        <Auxi >
            <h3>Login Form</h3>
            <form onSubmit={props.login}>
                <div className={classes.Login}>
                    <TextField
                        id="outlined-name"
                        label="Email"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        margin="normal"
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        color="primary" >Log-in</Button>
                </div>
            </form>
        </Auxi>
    )
}

export default Login;
