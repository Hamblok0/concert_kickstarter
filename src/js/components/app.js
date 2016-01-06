import React from 'react';
import $ from 'jquery';

import Header from './header';
import User from '../models/user.js';
import Footer from './footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleMe = this.handleMe.bind(this);

    this.state = {
      session: {}
    }
  }
  componentDidMount(){

  User.getMe(this.handleMe)
}

// componentDidUpdate (prevProps) {
//   // respond to parameter change
//     this.componentDidMount();
// }

handleMe(response) {
  this.setState({
    session: {
      userType: response.type_of_user,
      bandId: response.band_id
    }
  });
  console.log(this.state);
}

  render() {
    return (
      <div className="wrapper">
        <Header session={this.state.session}/>
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
