import React from 'react';
import User from '../models/user';
import BandProfile from './band-profile';

export default (props) => {
  let userNav = (
    <nav>
      <a className="discoverBtn btn" href="#">Discover</a>
      <div className="guestBtn">
        <a className="registerBtn" href="#register">Sign up</a>
        <a className="loginBtn" href="#login">Log in</a>
      </div>
    </nav>
  )

  if (User.isLoggedIn() && props.session.userType !== "Band") {
    userNav = (
      <nav>
        <a className="discoverBtn btn" href="#">Discover</a>
        <div className="guestBtn">
          <a className="logoutBtn" href="#/" onClick={() => {
                User.logout();
            }}>Log out</a>
        </div>
      </nav>
    )
  }
  if (User.isLoggedIn() && props.session.userType === "Band") {
    userNav = (
      <nav>
        <a className="gitBtn btn" href={`#band/${props.session.bandId}/edit2`}>Start A Gig</a>
        <a className="gitBtn btn" href={`#band/${props.session.bandId}`}>My Band</a>
        <a className="discoverBtn btn" href="#">Discover</a>
        <div className="guestBtn">
          <a className="logoutBtn" href="#/" onClick={() => {
                User.logout();
            }}>Log out</a>
        </div>
      </nav>
    )
  }
  return (
    <header id="fading" height="70px">
      <a href="#"><i className="fa fa-headphones"></i></a>
      {userNav}
    </header>
  )
}
