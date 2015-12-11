import React, { PropTypes } from 'react';
import createLocation from 'history/lib/createLocation';
import $ from 'jquery';


class Register extends React.Component {
  constructor(props) {
    super(props);

    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(e){
    e.preventDefault();
    console.log('you clicked the register btn!');

    let email = this.refs.email.value;
    let password = this.refs.pwd.value;
    let passwordConfirm = this.refs.pwd1.value;
    let type = $('input[name=radio]:checked').val();

    console.log(email, password, type);

    if(email && password && type && password === passwordConfirm) {
      CreateUser.register({
        email: email,
        password: password,
        type: type
      }, (error, data) => {
        if(!error) {
          //send user to login screen
        } else {
          alert('There was an error with your information.' + error);
        }
      });
    } else {
      alert('Email, password, and password confirmation are required.')
    }
  }

  render () {
    return(
      <form className="register"
            onSubmit={this.handleRegister}>
        <input type="text" className="email" placeholder="Email" ref="email" />
        <input type="password" className="password" placeholder="Password" ref="pwd" />
        <input type="password" className="password" placeholder="Confirm password" ref="pwd1" />
        <label id="fan" value="fan">I am a... Fan</label>
        <input type="radio" id="fan" name="radio" value="fan"/>
        <label id="band" value="band">Band</label>
        <input type="radio" id="band" name="radio" value="band"/>
        <input type="submit" className="registerBtn" value="Sign up" />
        <p className="instructions">Already have an account? <a href="#login" className="formLink">Login »</a></p>
      </form>
    )
  }
}

export default Register;
