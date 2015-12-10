import React from 'react'

class Login extends React.Component {
  render () {
    return(
      <form className="login">
        <input type="text" className="email" placeholder="Email" ref="email" />
        <input type="password" className="password" placeholder="Password" ref="pwd" />
        <input type="submit" className="loginBtn" value="Log in" />
        <p className="instructions">Don't have an account? <a href="#register" className="formLink">Sign up »</a></p>
      </form>
    )
  }
}

export default Login;
