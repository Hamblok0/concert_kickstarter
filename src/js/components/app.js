import React from 'react';

import Header from './header';
import Footer from './footer';

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <Header />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
