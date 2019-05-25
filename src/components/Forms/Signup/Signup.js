import React from 'react'
import classes from './../Signup/Signup.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Auxi from './../../../hoc/Auxi/Auxi';
function Signup(props) {
    return (
        <Auxi>
            <h3>Signup Form</h3>
            <form onSubmit={props.signup}>
                <div className={classes.Signup}>
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
                        color="primary" >Sign-up</Button>
                </div>
            </form>
        </Auxi>
    )
}
export default Signup;
