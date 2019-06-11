import React, { Component } from 'react';
import './login.css';
import { Logo } from '../../assets/icons/Logo';

class Login extends Component {

    state = {
        username: ''
    }

    handleSubmitForm = e => {
        e.preventDefault()
        const { username } = this.state

        if (!username.length) return;

        localStorage.setItem('username', username)

        this.props.history.push('/timeline')
    }

    handleChangeInput = e => {
        this.setState({ username: e.target.value })
    }

    render() {

        console.log(this)

        return (
            <div className="login-wrapper">
                <div className="login-content">
                    <Logo color="#1da1f2" />
                    <form onSubmit={e => this.handleSubmitForm(e)}>
                        <input type="text" placeholder="Nome do usuário" onChange={e => this.handleChangeInput(e)} value={this.state.username} />
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;