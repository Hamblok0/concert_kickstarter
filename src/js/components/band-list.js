import React from 'react';
import jQuery from 'jquery';

import Band from './band';

class BandList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bands: []
    }
  }

  componentDidMount(){
    jQuery.ajax("https://gigster-app.herokuapp.com/users").then( response => {
      let bands = response.filter(band => {
        return band.type === "Band"
      });
      this.setState({
        bands
      });
    });
  }

  render () {
    let bands = this.state.bands.map(band => {
      return (
        <Band key={band.id}
              name={band.name} />

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
