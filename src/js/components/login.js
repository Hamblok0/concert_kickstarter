import React, { PropTypes } from 'react';
import createLocation from 'history/lib/createLocation';
import $ from 'jquery';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    console.log('you clicked the login btn!');

    let email = this.refs.email.value;
    let password = this.refs.pwd.value;

    if(email && password) {
      CreateUser.login({
        email: email,
        password: password
      }, (error, data) => {
        if(!error) {
          //send user to home view if fan, send user to profile edit if band
        } else {
          alert('There was an error with your information.' + error);
        }
      });
    } else {
      alert('Try again!');
    }
  }

  render () {
    return(
      <form className="login"
            onSubmit={this.handleLogin}>
        <input type="text" className="email" placeholder="Email" ref="email" />
        <input type="password" className="password" placeholder="Password" ref="pwd" />
        <input type="submit" className="loginBtn" value="Log in" />
        <p className="instructions">Don't have an account? <a href="#register" className="formLink">Sign up »</a></p>
      </form>
    )
  }
}

export default Login;
