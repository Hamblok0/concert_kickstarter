import React from 'react';
import User from '../models/user';


export default (props) => {
  let userNav = (
    <div className="guestBtn">
      <a className="registerBtn" href="#register">Sign up</a>
      <a className="loginBtn" href="#login">Log in</a>
    </div>
  )

  if (User.isLoggedIn()) {
    userNav = (
      <div className="guestBtn">
        <a className="logoutBtn" href="#/" onClick={() => {
              User.logout();
          }}>Log out</a>
      </div>
    )
  }
  return (
    <header id="fading" height="70px">
      <a href="#"><i className="fa fa-headphones"></i></a>
      <nav>
        <a className="gitBtn btn" href="#band/1/edit">Start A Gig</a>
        <a className="discoverBtn btn" href="#">Discover</a>
        {userNav}
      </nav>
    </header>
  )
}
