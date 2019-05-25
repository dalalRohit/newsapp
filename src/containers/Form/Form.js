import React, { Component } from 'react'
import classes from './Form.css';
import LoginForm from './../../components/Forms/Login/Login';
import SignupForm from './../../components/Forms/Signup/Signup';
import { Button } from '@material-ui/core';

class Form extends Component {
    state = {
        form: 'login',
        formData: {
            login: {
                email: {
                    value: '',
                    error: false,
                    validation: {
                        required: true
                    }
                },
                password: {
                    value: '',
                    error: false,
                    validation: {
                        required: true
                    }
                }

            },
            signup: {

            }
        }
    }
    switchForm = (name) => {
        this.setState({ form: name })
    }
    render() {
        let formToShow = null;
        if (this.state.form === 'login') {
            formToShow = <LoginForm />
        } else {
            formToShow = <SignupForm />
        }
        return (
            <div className={classes.Form}>

                {formToShow}

                <div className={classes.Switch} >
                    <Button
                        variant="outlined"
                        color='secondary'
                        name="login"
                        className={classes.Button}
                        onClick={() => this.switchForm('login')}
                    >Login</Button>
                    <Button
                        variant="outlined"
                        color='secondary'
                        name="signup"
                        className={classes.Button}
                        onClick={() => this.switchForm('signup')}
                    >Signup</Button>
                </div>
            </div>
        )
    }
}

export default Form;
