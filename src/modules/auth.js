import React, { Component } from 'react';

class LoginPage extends Component {
    state = {
        username: '',
        password: '',
        error: '',
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { username, password } = this.state;

        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('user', JSON.stringify({ username }));
            window.location.href = '/game';
        } else {
            this.setState({ error: 'Invalid username or password' });
        }
    };

    render() {
        const { username, password, error } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                {error && <p>{error}</p>}
                <div className='login-board'>
                    <div className='tmp'>
                        <div className='login-form'>
                            <label htmlFor={'loc_login'}>
                                LOGIN:
                            </label>
                            <input
                                type='text'
                                id='loc_login'
                                value={username}
                                onChange={(event) => this.setState({ username: event.target.value })}
                            />
                        </div>
                        <div className='login-form'>
                            <label htmlFor='loc_pass'>
                                PASSWORD:
                            </label>
                            <input
                                type='text'
                                id='loc_pass'
                                value={password}
                                onChange={(event) => this.setState({ password: event.target.value })}
                            />
                        </div>
                        <div className='login-button'>
                            <button type='submit'>SIGN IN</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default LoginPage;
