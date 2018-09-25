import React, { Component } from 'react';
import '../App.css';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <form>
                    <p>Username : <input ref='username'/></p>
                    <p>Password : <input ref='password'/></p>
                    <input type='submit'/>
                </form>
            </div>
        );
    }
}

export default Login;