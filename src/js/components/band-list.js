import React from 'react';
import jQuery from 'jquery';
<<<<<<< HEAD
=======

>>>>>>> master

import Band from './band';

class BandList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bands: []
    }
  }

  componentDidMount(){
    jQuery.ajax("https://gigster-app.herokuapp.com/bands").then( response => {
      let bands = response
      this.setState({
        bands
      })
    })
  };

  render () {
    let bands = this.state.bands.map(band => {
      return (
        <Band key={band.id}
              name={band.name}
              id={band.id} />
      )
    });

  return (
    <section className="bandList">
      <h1>Latest</h1>
      {bands}
    </section>
  )

  }
}

export default BandList;
