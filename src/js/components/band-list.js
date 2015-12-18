import React from 'react';
import jQuery from 'jquery';


import Band from './band';

class BandList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bands: [],
      concerts: []
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
    let bands = this.state.bands.map((band) => {
      return (
        <Band key={band.id} band={band} />
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
