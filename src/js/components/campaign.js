import React from 'react';

import React from 'react'

class Campaign extends React.Component {
  render () {
    return (
      <section className="border">
        <span>
          <i className="fa fa-map-marker"></i>
          <h3>Nashville</h3>
        </span>
        <span>
          <i className="fa fa-calendar"></i>
          <h3>Brovember 11th</h3>
        </span>
        <span>
          <i className="fa fa-ticket"></i>
          <h3>$6 - General Admission</h3>
        </span>
      </section>
      <a href={`#band/${this.props.params.id}/fund`}><input type="submit" className="bringBtn" value="pledge"></input></a>
    )
  }
}

export Campaign default ;
