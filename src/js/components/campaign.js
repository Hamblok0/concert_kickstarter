import React from 'react';
let moment = require('moment');
moment().format();


class Campaign extends React.Component {
  render () {
    let id = this.props.bandId;
    let date = this.props.concert.performance_date
    let momentTime = moment(date).fromNow();
    return (
      <section className="border">
        <span>
          <i className="fa fa-map-marker"></i>
          <h3>{this.props.concert.location}</h3>
        </span>
        <span>
          <i className="fa fa-calendar"></i>
          <h3>{momentTime}</h3>
        </span>
        <span>
          <i className="fa fa-ticket"></i>
          <h3>${this.props.concert.price}- General Admission</h3>
        </span>
        <a href={`#band/${id}/fund`}><input type="submit" className="bringBtn" value="pledge"></input></a>
      </section>
    )
  }
}

export default Campaign  ;
