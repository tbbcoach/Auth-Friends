import React from 'react'
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: 'username',
            password: 'password'
        }
    };

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login
}