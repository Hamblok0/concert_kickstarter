import React from 'react';

class Register extends React.Component {
  render () {
    return(
      <form className="register">
        <input type="text" className="email" placeholder="Email" ref="email" />
        <input type="password" className="password" placeholder="Password" ref="pwd" />
        <input type="password" className="password" placeholder="Confirm password" ref="pwd1" />
        <input type="submit" className="registerBtn" value="Sign up" />
        <p className="instructions">Already have an account? <a href="#login" className="formLink">Login »</a></p>
      </form>
    )
  }
}

export default Register ;
