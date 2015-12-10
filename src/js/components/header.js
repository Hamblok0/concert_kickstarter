import React from 'react'


export default (props) => (
  <header>
    <a href="#"><img src="../images/logo.png" alt="Logo" width="80px"/></a>
    <nav>
      <a className="gitBtn btn" href="#band/1/edit">Start A Gig</a>
      <a className="discoverBtn btn" href="#">Discover</a>
      <a className="registerBtn guestBtn" href="#register">Sign up</a>
      <a className="loginBtn guestBtn" href="#login">Log in</a>
    </nav>
  </header>
)
