import React from 'react';


class Campaign extends React.Component {
  render () {
    let id = this.props.bandId;
    return (
      <section className="border">
        <span>
          <i className="fa fa-map-marker"></i>
          <h3>{this.props.concert.location}</h3>
        </span>
        <span>
          <i className="fa fa-calendar"></i>
          <h3>{this.props.concert.performance_date}</h3>
        </span>
        <span>
          <i className="fa fa-ticket"></i>
          <h3>$6 - General Admission</h3>
        </span>
        <a href={`#band/${id}/fund`}><input type="submit" className="bringBtn" value="pledge"></input></a>
      </section>
    )
  }
}

export default Campaign  ;
