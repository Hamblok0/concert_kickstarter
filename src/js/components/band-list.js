import React from 'react';
import BandAPI from '../models/band';

import Band from './band';

class BandList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bands: []
    }
  }

  componentDidMount(){
    BandAPI.getAll((data) => {
      console.log(data);
      this.setState({
        bands: data.bands
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
